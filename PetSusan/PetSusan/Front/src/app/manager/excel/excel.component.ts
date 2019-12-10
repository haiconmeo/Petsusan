import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';  
import * as FileSaver from 'file-saver'; 
import { List } from '../../_models/list-item.class';
import { ManageItemsService } from '../../_services/manage-items.service';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
})
export class ExcelComponent implements OnInit {
  public items : List[]=[];
  public data =[];
  constructor(
    public service : ManageItemsService,
  ) { }

  ngOnInit() {
  }

  storeData: any;  
  csvData: any;  
  jsonData: any;  
  textData: any;  
  htmlData: any;  
  fileUploaded: File;  
  worksheet: any;  
  uploadedFile(event) {  
    this.fileUploaded = event.target.files[0];  
    this.readExcel();  
  }  
  readExcel() {  
    let readFile = new FileReader();  
    readFile.onload = (e) => {  
      this.storeData = readFile.result;  
      var data = new Uint8Array(this.storeData);  
      var arr = new Array();  
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);  
      var bstr = arr.join("");  
      var workbook = XLSX.read(bstr, { type: "binary" });  
      var first_sheet_name = workbook.SheetNames[0];  
      this.worksheet = workbook.Sheets[first_sheet_name];  
    }  
    readFile.readAsArrayBuffer(this.fileUploaded);  
  }  
 
  readAsJson() {  
    this.jsonData = XLSX.utils.sheet_to_json(this.worksheet, { raw: false });  
    // this.jsonData = JSON.stringify(this.jsonData);  
    // const data: Blob = new Blob([this.jsonData], { type: "application/json" });
    console.log("asd,",  this.jsonData.length)
    for( var i=0; i<this.jsonData.length; i++){
      
      this.service.getAdd(this.jsonData[i]).subscribe(data=>{
        console.log(data)
      });
    }
  }   


}
