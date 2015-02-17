<?php
 
if(isset($_POST['email'])) {
 
    $email_to = "scott@deepsprings.edu";
 
    $email_subject = "Dolla dolla bills yall";
 
    function died($error) {
 
        echo "Oops!";
 
        echo $error."<br /><br />";
 
        die();
 
    }
 
     
 
    // validation expected data exists
 
    if(!isset($_POST['name']) ||
 
        !isset($_POST['email'])) {
 
        died('Your form is missing some required fields.');       
 
    }
 
     
 
    $name = $_POST['name']; // required
 
    $email_from = $_POST['email']; // required

    $time = $_POST['time']; // not required

    $guestcount = $_POST['guestcount']; // not required

    $diet = $_POST['diet']; // not required

    $electricity = $_POST['electricity']; // not required

    $payment = $_POST['payment']; // not required

    $anything = $_POST['anything']; // not required
 


    $error_message = "";
 
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
 
    $error_message .= 'The email address you entered does not appear to be valid.<br />';
 
  }
 
  if(strlen($error_message) > 0) {
 
    died($error_message);
 
  }
 
    $email_message = "Form details below.\n\n";
 
    function clean_string($string) {
 
      $bad = array("content-type","bcc:","to:","cc:","href");
 
      return str_replace($bad,"",$string);
 
    }
 
     
 
    $email_message .= "Name: ".clean_string($name)."\n";
 
    $email_message .= "Email: ".clean_string($email_from)."\n";

    $email_message .= "Date and time: ".clean_string($time)."\n";

    $email_message .= "Guest count: ".clean_string($guestcount)."\n";

    $email_message .= "Dietary preferences: ".clean_string($diet)."\n";

    $email_message .= "Electricity available: ".clean_string($electricity)."\n";

    $email_message .= "Where the money at: ".clean_string($payment)."\n";

    $email_message .= "Anything else? ".clean_string($anything)."\n";
 
// create email headers
 
$headers = 'From: '.$email_from."\r\n".
 
'Reply-To: '.$email_from."\r\n" .
 
'X-Mailer: PHP/' . phpversion();
 
@mail($email_to, $email_subject, $email_message, $headers);  
 
?>
 
 
 
<!-- include your own success html here -->
 
 
 
Thank you for contacting us. We will be in touch with you very soon.
 
 
 
<?php
 
}
 
?>