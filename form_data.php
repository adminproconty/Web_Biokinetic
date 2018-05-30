<?php
    if(isset($_POST['mail'])) {
          
        // EDIT THE 2 LINES BELOW AS REQUIRED
        $email_to = "recepcion@biokineticec.com";
        $email_subject = "Cita agendada desde Portal Web";
         
        
        $name = $_POST['name']; // required
        $email_from = $_POST['mail']; // required
        $text = $_POST['message']; // required
        $lastname = $_POST['lastname'];
        $phone = $_POST['phone'];
        $number = $_POST['number'];
        $department = $_POST['department'];// required
        $date = $_POST['date'];

        $email_message = "Mensaje desde Website: \n\n";
         
        function clean_string($string) {
          $bad = array("content-type","bcc:","to:","cc:","href");
          return str_replace($bad,"",$string);
        }
         
        $email_message .= "Nombre: ".clean_string($name)."\n";
        $email_message .= "Apellido: ".clean_string($lastname)."\n";
        $email_message .= "Email: ".clean_string($email_from)."\n";
        $email_message .= "Teléfono: ".clean_string($phone)."\n";
        $email_message .= "SSIN: ".clean_string($number)."\n";
        $email_message .= "Especialidad: ".clean_string($department)."\n";
        $email_message .= "Fecha: ".clean_string($date)."\n";
        $email_message .= "Mensaje: ".clean_string($text)."\n";
         
         
    // create email headers
    $headers = 'From: '.$email_from."\r\n".
    'Reply-To: '.$email_from."\r\n" .
    'X-Mailer: PHP/' . phpversion();
    if(@mail($email_to, $email_subject, $email_message, $headers)) {
        $data['status'] = true;
        $data['msg'] = 'TU CITA HA SIDO GENERADA, PRONTO NOS COMUNICAREMOS CONTIGO';
        $data['class'] = 'success';
    } else {
        $data['status'] = false;
        $data['msg'] = 'Su e-mail no fue enviado. Intente nuevamente';
        $data['class'] = 'error';
    }
    
    echo json_encode($data);
}
?>