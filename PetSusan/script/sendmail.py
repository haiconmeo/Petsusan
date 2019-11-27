
import sys
from smtplib import SMTP_SSL as SMTP      

from email.mime.text import MIMEText
def sendmail(receivers,context,subject):
    SMTP_Host = 'smtp.gmail.com'
    sender = 'testmail@vinasupport.com'
    receivers = ['user@gmail.com']
    username = "testmail@vinasupport.com"
    password = "your_password"

    text_subtype = 'plain'
    content = """\
    Test SMTTP Python script
    """
    subject = "Sent from vinasupport.com"
    try:
        msg = MIMEText(content, text_subtype)
        msg['Subject'] = subject
        msg['From'] = sender  
        conn = SMTP(SMTP_Host)
        conn.set_debuglevel(False)
        conn.login(username, password)
        try:
            conn.sendmail(sender, receivers, msg.as_string())
        finally:
            conn.quit()
    except Exception as error:
        raise("sai roi")
