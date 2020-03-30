
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


app.use(bodyParser());

const PORT = 4001;
app.use(express.static('public'));

//Nodemailer
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mikesmailfortesting@gmail.com',
        pass: 'Qwerty98765'
    }

});


const messageForClient = (fname, sname, date, time, itemsandamount) => {
return (`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap" rel="stylesheet">
  </head>
  <body style="width: 100% !important; -webkit-text-size-adjust: none; margin: 0; padding: 0;">
    <center>
      <table id="backgroundTable" style="border-spacing: 0; border-collapse: collapse; font-family: proxima-nova, 'helvetica neue', helvetica, arial, geneva, sans-serif; width: 100% !important; height: 100% !important; color: #4c4c4c; font-size: 15px; line-height: 150%; background: #ffffff; margin: 0; padding: 0; border: 0;">
        <tr style="vertical-align: top; padding: 0;">
          <td align="center" valign="top" style="vertical-align: top; padding: 0;">
            <table id="templateContainer" style="border-spacing: 0; border-collapse: collapse; font-family: proxima-nova, 'helvetica neue', helvetica, arial, geneva, sans-serif; width: 600px; color: #4c4c4c; font-size: 15px; line-height: 150%; background: #ffffff; margin: 40px 0; padding: 0; border: 0;">
              <tr style="vertical-align: top; padding: 0;">
                <td class="templateContainerPadding" align="center" valign="top" style="vertical-align: top; padding: 0 40px;">
                  <table id="templateContent" style="border-spacing: 0; border-collapse: collapse; font-family: proxima-nova, 'helvetica neue', helvetica, arial, geneva, sans-serif; width: 100%; background: #ffffff; margin: 0; padding: 0; border: 0;">
                    <tr style="vertical-align: top; padding: 0;">
                      <td style="vertical-align: top; text-align: left; padding: 0;" align="left" valign="top">
                        <h1 id="logo" style="color: #6E5BAA; display: block; font-family: 'Fredericka the Great', cursive; font-size: 32px; font-weight: 200; text-align: left; margin: 0 0 40px;" align="left">Creta Maris Watersports</h1>
                        <p style="margin: 20px 0;">Dear ${fname} ${sname}!</p>
                        <p style="margin: 20px 0;">Thanks for booking with Creta Maris Watersports</p>


                        <p style="margin: 20px 0;">You made a booking for ${date} at ${time}.</p>
                        
                        <p style="margin: 20px 0;">You bloody bastard wanted ${itemsandamount}.</p>
<p style="margin: 20px 0;">Have fun, and don't hesitate to contact us if you have any questions, if you want to cancel the appointment. Also we would like to hear your feedback.</p>


                        <p style="margin: 20px 0;">
                          Creta Maris Watersports Team<br />
                          <a href="https://creatamariswatersports.website" style="color: #6E5BAA;">https://creatamariswatersports.website</a>
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
                <tr style="vertical-align: top; padding: 0;">
                  <td class="templateContainerPadding" align="center" valign="top" style="vertical-align: top; padding: 0 40px;">
                    <table id="footerContent" style="border-spacing: 0; border-collapse: collapse; font-family: proxima-nova, 'helvetica neue', helvetica, arial, geneva, sans-serif; width: 100%; border-top-style: solid; border-top-color: #ebeaef; color: #999999; font-size: 12px; background: #ffffff; margin: 0; padding: 0; border-width: 1px 0 0;">
                      <tr style="vertical-align: top; padding: 0;">
                        <td valign="top" style="vertical-align: top; text-align: left; padding: 0;" align="left">
                          <p style="margin: 20px 0;">
                            Creta Maris Watersports Team is the most powerful team in the world and mr. Tolis is one of the most influential persons in my life.
                          </p>

                          <p style="margin: 20px 0;">
                            To learn more about Creta Maris Watersports and all its features, check out website: <a href="https://creatamariswatersports.website" style="color: #666666;">https://creatamariswatersports.website</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
            </table>
          </td>
        </tr>
      </table>
    </center>

<style type="text/css">
body {
width: 100% !important;
}
.ReadMsgBody {
width: 100%;
}
.ExternalClass {
width: 100%;
}
body {
-webkit-text-size-adjust: none;
}
body {
margin: 0; padding: 0;
}
img {
border: 0; outline: none; text-decoration: none;
}
#backgroundTable {
height: 100% !important; margin: 0; padding: 0; width: 100% !important;
}
#backgroundTable {
color: #4c4c4c; background-color: #ffffff; font-family: proxima-nova, 'helvetica neue', helvetica, arial, geneva, sans-serif; font-size: 15px; line-height: 150%;
}
@media (max-width: 540px) {
  #templateContainer {
    width: 100% !important;
  }
  #templateContainer .templateContainerPadding {
    padding: 0 5% !important;
  }
}
</style>
</body>
</html>`)};

const items = (body) => {
  const allCases = {
    j: {isTrue: body.jCheckbox, name: 'Jet Ski', amount: body.jAmount},

    k: {isTrue: body.kCheckbox, name: 'Kayak', amount: body.kAmount},
    
    s: {isTrue: body.sCheckbox, name: 'SUP', amount: body.sAmount},
    
    p: {isTrue: body.pCheckbox, name: 'Pedalo', amount: body.pAmount},
    
    f: {isTrue: body.fCheckbox, name: 'Flyboard', amount: body.fAmount}
  };
  let message = '';
  for (let [key, value] of Object.entries(allCases)) {
    if (value.isTrue === 'true') {
      const name = function() {
        if (value.amount > 1) {
          return `${value.name}s`
        } else {
          return value.name
        }
      };
      message += ` ${value.amount} ${name()},`
    }
    
  }
  return message.slice(0, -1);


  // if (body.jCheckbox) {
  //   return ` ${body.jAmount} Jet Ski ride(s),`
  // };
  // if (body.kCheckbox) {
  //   return ` ${body.kAmount} Kayak ride(s),`
  // };
  // if (body.sCheckbox) {
  //   return ` ${body.sAmount} SUP ride(s),`
  // };
  // if (body.pCheckbox) {
  //   return `${body.pAmount} Pedalo ride(s),`
  // };
  // if (body.fCheckbox) {
  //   return `${body.fAmount} Flyboard ride(s),`
  // };
}

const mailOptionsForClient = (clientAdress, messageForClient) => {
    return ({from: 'Creta Maris Watersports',
    to: clientAdress,
    subject: 'Creta Maris Watersports Booking',
    html: messageForClient
})};



app.post('/api', (req, res, next) => {
  console.log('Starting making a booking.')
  transporter.sendMail(mailOptionsForClient(req.body.email, messageForClient(req.body.fName, req.body.lName, req.body.date, req.body.time, items(req.body))), (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Booking made');
        res.status(200).send('booking made')
    }
})
})



app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
  });