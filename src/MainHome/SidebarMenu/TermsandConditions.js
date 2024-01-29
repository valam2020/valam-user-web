import React from 'react';
import { useEffect } from 'react';
import './TermsandConditions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft, faAngleRight, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import HomeHeader from '../HomeHeader';
const TermsandConditions = () => {
    const navigate = useNavigate();
  // useEffect to simulate componentDidMount
  useEffect(() => {
    // You can add any initial setup logic here
    // For example, fetching data or other actions
  }, []);
  const goBack =()=> {
    navigate('/');
  }

  return (
    <div>
         {/* <HomeHeader/> */}
         <div className="headerongo">
          <div 
          onClick={() => goBack()} 
          className="goBackContainerongo">
            {/* <FontAwesome name="angle-left" size={36} color={COLORS.WHITE} /> */}
            <FontAwesomeIcon icon={faAngleLeft} size="lg" style={{ color: '#FFFFFF' }} />
          </div>
          <span className="headerTextongo">TERMS AND CONDITIONS</span>
          
        </div>
        
    <div className="privacy-policy-container">
        <h5>Effective from 27 January 2024</h5>
        <h4>CUSTOMER TERMS</h4>
        <p>
        Please carefully review these Terms of Service before clicking on the "I Agree" button or otherwise 
expressing your agreement. By clicking on the "I Agree" button or agreeing to these Terms of Service 
in any other manner, you confirm that 
<ol>
    <li>you are legally of age to enter into a binding contract with 
VALAM, ("Prastley LLC") in your jurisdiction of permanent residence;</li>
<li>you have read and 
comprehended these Terms of Service;</li>
    <li>
    you willingly consent to be bound by and enter into a 
legally binding agreement through these Terms of Service.
    </li>
</ol>
 If you are accepting these terms on behalf 
of another individual, company, or legal entity, you assert and ensure that you possess the full 
authority to bind that person, company, or legal entity to these Terms of Service. By clicking the "I 
Agree" button or otherwise expressing agreement, you affirm that such person, company, or legal 
entity is now bound by these terms. If you do not agree to all the terms outlined in these Terms of 
Service, click the "I Disagree" button, and the process will be terminated, rendering the service (as 
defined below) unavailable for your use.
        </p>
        
        
       
         
      
      <div className="divider" />


      <h4>ACCEPTANCE</h4>
      <p>By either clicking the "I Agree" button at the bottom of these Terms of Service or utilizing the Service 
(as defined below), whichever occurs first, you acknowledge and consent to abide by these Terms of 
Service. Upon entering into these Terms of Service, you are also granting consent:

<ol>
    <li> for the collection 
and management of information in accordance with Valam's Privacy Notice, and</li>
<li>to receive text 
messages and emails related to the Service at the provided telephone number and email address.</li>
    
</ol>

 This 
includes, but is not limited to, initial messages containing registration codes, receipts (if functionality 
is provided and requested), and confirmation messages in response to any opt-out or other requests. 
If you update the initial telephone number and/or email address in your account settings, subsequent 
text messages will be sent to the updated contact information.
These Terms of Service establish an ongoing agreement between you and Valam, governing your 
utilization of the Service within the United States. You agree not to access or attempt to access the 
Service from locations outside the United States. Different terms, conditions, and restrictions may be 
applicable to the Service in various jurisdictions.</p>
<div className="divider" />


<h4> CHANGES TO TERMS OF SERVICE</h4>
        <p>
Valam retains the right, at its sole and absolute discretion, to modify these Terms of Service at any 
time, with or without prior notice. All alterations to these Terms of Service will become effective and 
binding upon you upon their display or posting in accordance with this paragraph. You acknowledge 
and accept that it is your responsibility to stay informed about the latest Terms of Service. In the event 
of significant changes to these Terms of Service, Valam will notify you by displaying the updated terms 
within the Application (as defined below) or by posting them on the Website (as defined below). The 
most current version of these Terms of Service can always be accessed at www.valam.net. This current 
version will override all preceding versions. If you disagree with any modification to these Terms of 
Service, you must promptly discontinue using the Service and remove the Application from your 
device(s).
</p>

<div className="divider" />

<h4> DESCRIPTION OF SERVICE</h4>
        <p>
        VALAM operates a technology platform designed to empower authorized users within specific 
locations in the United States. This platform enables users to perform various actions, including 
locating, hailing, booking, and hiring third-party providers offering ground transportation services 
through taxicabs or other for-hire vehicles (referred to as "Taxis"). Users can also pay for Taxi rides, 
track specific rides and payments, all through a supported computing device. This comprehensive 
offering, inclusive of mobile device software applications (such as the Valam® Application), text-based 
messaging protocols (referred to as "Text Services"), Valam-authorized web interfaces or websites 
(such as <a href="http://valam.net">http://valam.net</a>), and other means authorized by VALAM (collectively referred to as 
"Channels"), constitutes the "Service." Certain Channels allow users to store payment information, set 
tip preferences, and review past trips and receipts.
It is important to note that VALAM is not an issuer, financial institution, or money transmission 
business. Additionally, VALAM does not provide transportation services, own or operate Taxis, or exert 
control over Taxi owners, managers, dispatchers, agents, drivers, and operators. Through the Service, 
VALAM solely acts as a platform to facilitate the acquisition of third-party transportation services and 
the payment of fares associated with these services.
</p>

<div className="divider" />

<h4>REGISTRATION</h4>
        <p>In order to utilize the Service, you must initially create and register an account on the form, referred 
to as an "Account." This can be done through an Application, a Website, or another Channel that offers 
such functionality. When registering an Account, you affirm that you have the legal capacity to enter 
into a binding agreement and assert that all information provided during registration or through the 
Application, Website, or other Channel is truthful, complete, and accurate. The registration process 
involves: 
<ol>
    <li>associating an email address (which becomes your username) and creating a password 
for your Account;</li>
    <li> associating a phone number capable of receiving text messages with your 
Account; and </li>
    <li>submitting one or more valid credit cards for processing payment transactions 
associated with Taxi rides booked, hired, arranged, or paid for through the Service.</li>
</ol>
   For each registered 
credit card, debit card, or other accepted payment card, you authorize VALAM to verify the card's 
good standing with the issuer, which may include requesting payment authorization or processing a 
low-dollar amount credit in accordance with applicable card network rules.</p>

<div className="divider" />

<h4>ACCOUNT</h4>
<p>
You bear the exclusive responsibility for safeguarding the confidentiality and security of your Account 
password, as well as for all activities occurring through your Account. You commit to promptly 
notifying VALAM if you suspect any unauthorized use of your Account or unauthorized access to your 
password. VALAM holds no responsibility for any losses incurred due to the unauthorized use of your 
Account.
Moreover, you are accountable for furnishing and maintaining current, truthful, complete, and 
accurate information for your Account throughout your use of the Service. VALAM reserves the right 
to periodically assess your registration, Account, and eligibility to continue utilizing the Service, and 
may request additional information as needed. VALAM, at its sole and absolute discretion, retains the 
right to reject, suspend, or terminate your Account, with or without notice, except as otherwise 
mandated by Applicable Laws (as defined below)
</p>

<div className="divider" />

<h4>PROCESSING PAYMENTS FOR THE SERVICE AND TAXI RIDES</h4>
<p>
When you utilize the Service to hail, book, hire, arrange, or pay for a Taxi ride, you are considered to 
have accepted the service provided by VALAM through the Service and agree to pay the corresponding 
fees or charges (refer to Service Fees below). Upon requesting a Taxi ride through the Service, we may 
pre-authorize one of the payment cards linked to your account for an amount that reasonably ensures 
your ability to cover the fare and associated fees or charges for the requested Taxi ride. Upon entering 
a Taxi and instructing the driver or operator to a destination, you are considered to have accepted the 
third-party transportation services and agree to pay the corresponding fare and related fees or 
charges (such as tolls, sales tax, regulatory surcharges, etc.). These amounts, along with applicable 
Service Fees, will be charged to one of the payment cards associated with your account, and you 
hereby authorize such charges. Payments made in connection with the Taxi rides you hire, book, 
arrange, or pay for through the Service are non-refundable by VALAM; however, you may have 
additional refund or charge-back rights as per the agreement with your card issuer. Please refer to the 
terms and conditions of your payment card for more information.
</p>

<div className="divider" />

<h4>YOUR USE OF THE SERVICE</h4>
<p>
Your use of the Service is strictly for personal use, limited to facilitating the hailing, booking, hiring, 
and payments for Taxi rides in specific locations within the United States. It may not be utilized for 
sending cash advances, cash equivalents, or transferring money between you and a third party.
By accessing or using the Service, you agree to use it, including all associated features, functionalities, 
Channels, and software, in accordance with these Terms of Service and all applicable laws, statutes, 
rules, and regulations (referred to as "Applicable Laws"). Furthermore, you commit to:
Use the Service only for lawful purposes.
Avoid uploading, posting, emailing, or transmitting any material containing software viruses or any 
other computer code, files, or programs designed to disrupt, destroy, or limit the functionality of the 
Service or any associated computer software, hardware, or telecommunications equipment.
Refrain from impersonating any person or entity or misrepresenting your affiliation with any person 
or entity, including those associated with the Service.
Abstain from interfering with the servers or networks connected to any part of the Service or violating 
any procedures, policies, or regulations of networks linked to the Service.
Avoid causing impairment or harm to the Service, including any Channels, in any manner.
</p>

<div className="divider" />

<h4>COMMUNICATIONS FROM VALAM</h4>
<p>
You hereby agree and give consent to receive all communications, agreements, documents, notices, 
statements, and disclosures (collectively referred to as "Communications") electronically, provided by 
VALAM in connection with your Account and your use of the Service. These Communications will be 
conveyed through either (a) posting a notice or message via the Channels or (b) sending electronic 
mail to the email address associated with your Account. You acknowledge that all Communications 
will be deemed received by you within 24 hours of being posted to any Channel or emailed to you.
Additionally, you affirm that your electronic signature on any agreements or documents associated 
with the Service holds the same legal effect as a physical signature.
</p>

<div className="divider" />

<h4>SERVICE FEES</h4>
<p>
For each Taxi ride initiated through the Service by making a ground transportation request, you may 
incur a base service fee. In accordance with this provision, you agree to pay the specified amount to 
VALAM and authorize VALAM to charge it to a payment card linked to your Account.
Reservation Fee: If you choose to schedule a Taxi ride in advance (a "Scheduled Booking") through the 
Service, you may be subject to an additional reservation fee for each resulting Taxi ride. You agree to 
pay this fee to VALAM and authorize the corresponding charge to a payment card associated with your 
Account. It's important to note that a reservation fee does not apply to immediate ground 
transportation requests. Additionally, you acknowledge and agree that a Scheduled Booking does not 
guarantee a Taxi ride, and VALAM makes no representation or warranty regarding the availability of a 
third-party ground transportation provider at the time of your Scheduled Booking.
Cancellation Fee: Should you cancel a Taxi request via the Service after it has been accepted by a Taxi 
operator or cancel a Scheduled Booking less than sixty (10) minutes before the scheduled pick-up time, 
you may be subject to a cancellation fee. In such cases, you agree to pay the designated amount to 
VALAM and authorize the charge to a payment card associated with your Account.
No-Show Fee: If you request a Taxi through the Service and fail to cancel the request, the waiting time 
for the Taxi operator at the designated pickup location is four (4) minutes. For Scheduled Bookings, 
the Taxi operator will arrive within five (5) minutes of the scheduled pickup time and wait at least 
eight (8) minutes after the scheduled pickup time. Failure to board the Taxi within the applicable wait 
time may result in a no-show fee. You agree to pay this fee to VALAM and authorize the charge to a 
payment card associated with your Account.
</p>

<div className="divider" />

<h4>ADVERTISING</h4>
<p>
To support and subsidize the Service, VALAM may rely on advertising revenue. By using the Service, 
you grant consent to VALAM for the placement and display of advertisements, offers, and promotions 
on any Channel, your receipts (whether electronic or hard copy), and/or equipment located in Taxis 
associated with the Service. This includes passenger information monitors located in the rear of a Taxi. 
These advertisements, offers, and promotions may be personalized and targeted based on various 
factors, including your usage of the Service.
You acknowledge that VALAM is not responsible for the content of these advertisements, offers, or 
promotions ("Advertising Content"). Any activities, including the purchase of goods and/or services, 
and the accompanying terms and conditions arising from the Advertising Content, are solely between 
you and the relevant third party. 

<p>VALAM does not sponsor or endorse: 
    <ol>
        <li>
        any Advertising Content
        </li>
        <li>any goods or services featured in any Advertising Content</li>
        <li>any sites linked from such 
Advertising Content</li>
    </ol>
     VALAM explicitly disclaims any and all liability for errors or omissions in any 
Advertising Content. You recognize that additional terms and conditions may apply to your use or 
acceptance of these advertisements, offers, and promotions.
</p>
</p>

<div className="divider" />

<h4>PRIVACY</h4>
<p>
By utilizing the Service, you grant consent to VALAM for the collection and sharing of information 
about you, including your location obtained through your computing device, and your utilization of 
the Service with VALAM's third-party partners. VALAM may also gather anonymized, aggregated data 
related to your use of the Service for marketing, data analytics, and the improvement and optimization 
of the Service.
</p>

<div className="divider" />

<h4>LICENSE</h4>
<p>
Limited License Grant: Subject to your compliance with these Terms of Service, VALAM grants you a 
non-exclusive, limited, personal, non-transferable, non-sublicensable, revocable license to:
<ol>
    <li>download and use the Applications (in object code form only) on one or more mobile computing 
devices solely in connection with your personal and non-commercial use of the Service;</li>
    <li>access and 
use the other Channels solely in connection with your personal and non-commercial use of the Service; 
and </li>
    <li>view Advertising Content</li>
   
</ol>
  This license grant encompasses all updates, upgrades, 
enhancements, modifications, new versions, and replacements of any licensed material. Your ability 
to access or use any of the Channels or Advertising Content may vary by device or medium, and 
functionalities may also vary by device or medium.
</p>

<p><b>Restrictions:</b> As a condition of the limited license granted to you, except as expressly permitted in 
these Terms of Service or by Applicable Laws, you may NOT: (i) publish, display, disclose, rent, lease, 
loan, distribute, transmit, broadcast, or otherwise exploit the Service, the Channels, the Advertising 
Content, or any part thereof; (ii) modify or create derivative works based on the Service, the Channels, 
the Advertising Content, or any part thereof; (iii) copy, decompile, reverse engineer, disassemble, 
translate, adapt, or otherwise reduce the Channels or any of their underlying software or code to 
human-readable form; (iv) attempt to create the source code from the object code of any Application 
or any other Channel; (v) take any action that infringes upon or misappropriates the intellectual 
property or other proprietary rights of VALAM or any of VALAM’s third-party software providers or 
licensors; and/or (vi) sublicense or assign any of the Channels or Advertising Content (collectively, the 
“Prohibited Acts”). You must comply with the implementation and use requirements contained in all 
documentation associated with the Service, and you will be liable for all resulting damages suffered 
by you, VALAM, or any third parties if you fail to comply.
</p>

<p><b>Third Party Devices:</b>
 VALAM does not warrant the compatibility of the Service with third-party 
software or hardware, and VALAM does not guarantee that the operation of the Service will not 
damage or disrupt third-party software or hardware. Your mobile device is manufactured and sold by 
entities other than VALAM and its affiliates, and VALAM does not assume responsibility or warrant 
the performance of your mobile device, including its continuing compatibility with the Service. By 
using the Service, you agree to seek resolution solely from the entity that manufactured and/or sold 
your mobile device for any issues related to your mobile device and its compatibility with the Service.
</p>

<p>
<b>Third Party Software:</b> The Service may contain software programs licensed to VALAM by third parties. 
The terms and conditions, including limitations and restrictions, set forth in these Terms of Service 
apply to each third-party software program contained in the Service.
Exports: You may not use or export the Service, or any portion thereof, except as authorized by United 
States law and other Applicable Laws. Specifically, none of the software or technology underlying the 
Service may be exported or re-exported (a) into (or to a national or resident of) any U.S. embargoed 
countries or (b) to anyone on the U.S. Treasury Department’s list of Specially Designated Nationals or 
the U.S. Department of Commerce Denied Persons or Entities List. By using the Service, you represent 
and warrant that you are not a citizen of or located in any such country or on any such list.
</p>

<p>
<b>Exports: </b>You may not use or export the Service, or any portion thereof, except as authorized by United 
States law and other Applicable Laws. Specifically, none of the software or technology underlying the 
Service may be exported or re-exported (a) into (or to a national or resident of) any U.S. embargoed 
countries or (b) to anyone on the U.S. Treasury Department’s list of Specially Designated Nationals or 
the U.S. Department of Commerce Denied Persons or Entities List. By using the Service, you represent 
and warrant that you are not a citizen of or located in any such country or on any such list.
</p>
<div className="divider1" />

<p>
<h4>OWNERSHIP</h4>
The Service, which includes the Channels and Advertising Content, comprises material protected by 
copyright and other applicable intellectual property laws in the United States, other territories, and 
international treaty provisions. VALAM grants you a license for the use of the Service, including the 
Channels and Advertising Content, solely under the terms and conditions outlined in these Terms of 
Service. All rights not explicitly granted to you herein are reserved to VALAM (and any third party with 
ownership rights in software used in the Service). You are prohibited from removing any proprietary 
notice of VALAM or any other party from any copy of the Service or any component thereof. These 
Terms of Service do not confer any rights to you regarding trademarks or service marks of VALAM.

</p>
<div className="divider" />

<h4>UPDATES; UPGRADES</h4>
<p>

VALAM reserves the right, at its sole discretion, to release new versions, upgrades, enhancements, or 
modifications of any Application, Website, or other Channel. These updates may be electronically 
delivered to your mobile device, and you agree that the terms of these Terms of Service shall apply to 
all such updates. Failure to install any new versions, upgrades, enhancements, or modifications may 
result in the Service not functioning as intended.
</p>

<div className="divider" />

<h4>VALAM Notifications Text Message Program</h4>
<p>
If you agree to receive standard rate text messages within the Channels or through other means 
related to the Service, you may receive an initial text message containing a confirmation code during 
the account registration process. Additionally, you may have the option to receive text messages from 
VALAM containing your receipts. Please note that message and data rates may apply, and the 
frequency of messages is based on your usage.
It's important to be aware that text messaging may not be available in all areas, and not all mobile 
devices may be supported. VALAM is not accountable for the successful delivery or any delays in your 
receipt of text messages. Carriers are also not liable for delayed or undelivered messages.
VALAM reserves the right, at its sole and absolute discretion, to suspend or terminate this feature at 
any time, with or without notice to you. For assistance or questions, you can contact us at 
<a>www.valam.net</a>

</p>

<div className="divider" />

<h4>USE OF FEEDBACK</h4>
<p>
VALAM has the freedom to use any comments, information, ideas, concepts, reviews, techniques, or 
other materials included in any communication (collectively referred to as "Feedback") that you may 
send to us through or in connection with the Service (including, but not limited to, any Channel). This 
usage is without further compensation, acknowledgement, or payment to you, and for any purpose 
whatsoever. Such purposes may include, but are not limited to, developing, manufacturing, and 
marketing products, as well as creating, modifying, or improving the Service.
By submitting any Feedback to VALAM or responding to questionnaires, you grant VALAM a perpetual, 
non-exclusive, royalty-free, irrevocable license and right to display, use, reproduce, or modify the 
Feedback submitted in any media, software, or technology of any kind now existing or developed in 
the future.
</p>

<div className="divider" />

<h4>TERMINATION</h4>

<b>Your Termination: </b>
<p>You have the option to terminate these Terms of Service at any time by closing your 
Account and permanently removing all Applications and other Channels from all of your devices. 
Instructions for closing your Account are available on the Website or upon written request.</p>

<b>VALAM’s Termination:</b> 
<p>VALAM reserves the right to terminate or restrict your use of the Service 
without notice, for any reason or no reason at all. VALAM may also terminate or suspend the Service, 
your access to the Service, and/or your Account if, as determined by VALAM in its sole discretion, you 
(i) have breached any terms of these Terms of Service, (ii) pose an unacceptable fraud risk, (iii) provide 
VALAM with any false, incomplete, or misleading information, or engage in any fraud or illegal 
conduct, or (iv) for any other reason that VALAM determines violates Applicable Laws or VALAM’s 
policies.</p>


<b>Effect of Termination:</b> 
<p>Upon any termination, the license granted hereunder shall terminate, and you 
must immediately destroy any copies of any Application or other VALAM software in your possession. 
Provisions reasonably necessary to accomplish or enforce the purpose of these Terms of Service will 
survive any termination and remain in effect thereafter in accordance with their terms. This includes, 
without limitation, the sections entitled: 
<ol>
    <li> Disclaimer of Warranties</li>
    <li>Service Fees</li>
    <li>Ownership</li>
    <li>Limitation of Liabilities</li>
    <li>Indemnification</li>
    <li>Governing Law</li>
     <li>Arbitration </li>
      <li>Miscellaneous</li>
<li>Privacy</li>
</ol>

</p>

<div className="divider" />

<h4>WARRANTY DISCLAIMER:</h4>

<p>
The service, encompassing each channel and all associated software, features, or functionalities, is provided "as is" and "as available," with all imperfections and without any warranties. None of the entities indemnified by Valam (as defined below) make any representations or warranties regarding the service, channels, or associated software. Valam does not guarantee, represent, or warrant that your use of the service, including channels or associated software, will be uninterrupted or error-free. You acknowledge that Valam may alter or eliminate any aspect of the service, including features, without compensation or notice.

Valam explicitly disclaims liability for the use of mobile devices, third-party websites, links, or content (including advertising content), the internet, transportation services used by you (including taxis), and Valam software (including their ongoing compatibility with the service). To the extent permitted by applicable law, Valam and its licensors disclaim all representations and warranties, including those of merchantability, satisfactory quality, fitness for a particular purpose, and non-infringement. Furthermore, Valam does not assert that the information accessible via any channel or the service is accurate, complete, or current.

Valam does not assure that your use of the service will be free from interruption, loss, corruption, attack, viruses, interference, hacking, or other security intrusions, and Valam renounces any liability in this regard. No oral or written information or advice provided by Valam or its authorized representatives will create a warranty or constitute a binding representation upon Valam or its affiliated entities.
</p>
<p>
<b>Note: </b>"Entities indemnified by Valam" likely refers to entities protected from legal responsibility by Valam."

</p>

<div className="divider" />

<h4>LIMITATION OF LIABILITIES</h4>
<p>
Under no circumstances shall Valam, its affiliates, or any of Valam's or its affiliates' shareholders, managers, directors, officers, employees, licensors, agents, or representatives, collectively referred to as the "Valam indemnitees," be held jointly or severally liable to you or any other party for personal injury or any special, incidental, indirect, punitive, exemplary, or consequential damages. These damages include but are not limited to losses in use, data, or profits, business interruption, or any other commercial damages or loss, whether or not forewarned of the possibility of damage. This liability arises from or in connection with the use or performance of the service, including each channel and all associated software, or any other aspects related to the service, Valam software, or associated features and functionalities.

Valam's aggregate liability to you for all damages and losses arising from the use or inability to use the service, including each channel and associated software (excluding cases mandated by applicable law involving personal injury), shall not exceed the total fees received by Valam from you in connection with your service use during the six-month period immediately preceding the event, act, or omission giving rise to the purported liability. Notwithstanding any contrary provision herein, any action related to these Terms of Service or your service use against Valam or any Valam indemnitee must be initiated within one (1) year from the first day that the event, act, or omission causing the claim occurred. These limitations remain applicable even if the available remedy fails to fulfill its essential purpose.
</p>

<div className="divider" />

<h4>INDEMNIFICATION</h4>
<p>

You agree to indemnify and hold the Valam indemnitees harmless from any and all losses, as defined below, incurred by any of them and defend them against any claims arising from:
<ol style={{marginLeft:"10px"}}>
<div>(I) Your use of the service.</div>
<div>(II) Any violation or breach of these Terms of Service by you or any failure to comply with applicable laws.</div>
<div>(III) Any dispute or litigation caused by your acts or omissions.</div>
<div>(IV) Any data, information, or other content submitted by you.</div>
<div>(V) The use of your account, whether by you or a third party.</div>
<div>(VI) Any transportation disputes.</div>
<div>(VII) The commission of any prohibited acts.</div>
</ol>


<p>Valam reserves the right, at your expense, to assume exclusive defense and control of any matter requiring your indemnification, including the right to settle. You agree to cooperate with the defense and settlement of these claims. Valam will make reasonable efforts to notify you of any third-party claims subject to the indemnification requirement upon becoming aware of them.
</p>
<p>
For the purposes of the preceding paragraph, "losses" encompass judgments, settlements, awards, damages, losses, charges, liabilities, penalties, interest claims (including taxes and all related interest and penalties), and all related reasonable costs, expenses, and charges (such as reasonable attorney fees and costs of investigations, litigation, hearings, proceedings, document and data productions, and discovery).
</p></p>

<div className="divider" />

<h4>TRANSPORTATION DISPUTES</h4>
<p>
Any disputes or complaints regarding transportation services (referred to as "Transportation Dispute") 
must be addressed directly to the Taxi owner, dispatcher, manager, agent, driver, or operator 
providing the services. VALAM will not be involved in any complaints, negotiations, litigation, or 
disputes between you and third-party Taxi owners, dispatchers, managers, agents, drivers, or 
operators concerning Transportation Disputes. You agree to release the VALAM Indemnitees from all 
Transportation Disputes and undertake not to involve any VALAM Indemnitee in litigation or disputes 
arising from services provided by a Taxi owner, dispatcher, manager, agent, driver, operator, or any 
third party related to transportation services. If you breach this provision by attempting to involve 
VALAM Indemnitees, you will be liable for all Losses incurred by VALAM Indemnitees in connection 
with such involvement.
</p>

<div className="divider" />

<h4>GOVERNING LAW</h4>
<p>
These Terms of Service shall be governed by and construed in accordance with the laws of the State 
of New Jersey, applied to contracts made and performed entirely in New Jersey by New Jersey
residents. Any choice-of-law provision or rule, whether of New Jersey or any other jurisdiction, that 
would result in the application of the laws of another jurisdiction shall not be given effect.
</p>

<div className="divider" />

<h4>ARBITRATION</h4>
<p>
The parties involved in these Terms of Service will make reasonable efforts to amicably resolve any 
disputes, controversies, or differences arising from or in connection with these Terms of Service or 
the Service, including utilizing a mutually agreeable, non-binding mediation procedure. If such 
disputes are not resolved through mutual agreement or mediation, they shall be conclusively settled 
through confidential arbitration in New Jersey, or the metropolitan area where the relevant use of the 
Service occurred.
</p>

<p>The parties to these Terms of Service shall use all reasonable efforts to resolve any disputes, 
controversies, or differences arising out of or in connection with these Terms of Service or the Service 
amicably, including the use of a mutually agreeable, non-binding mediation procedure. Any such 
disputes, controversies, or differences that are not settled by mutual agreement or mediation shall be 
finally and exclusively settled by confidential arbitration held in new Jersey. If $100,000 or less is at 
issue in the arbitration petition and/or response, then such arbitration shall be by one (1) independent 
arbitrator selected jointly by you and VALAM that arbitrator shall not have the power to issue an 
award in excess of $100,000. If more than $100,000 is at issue in the arbitration petition and/or 
response, then such arbitration shall be by three (3) independent arbitrators, one chosen by you, one 
chosen by VALAM, and the third chosen by the two arbitrators selected by the parties. Once appointed 
pursuant to either procedure, the arbitrator or arbitral tribunal may order provisional or conservatory 
measures (including injunctive relief) at the request of a party and may embody such order in any final 
award. Nothing in the foregoing precludes, restricts or is intended to preclude or restrict the right of 
either party to seek injunctive or other equitable relief in an appropriate court of competent 
jurisdiction. English shall be the official language of the arbitration proceedings. Neither VALAM nor 
you will be entitled to join or consolidate claims in arbitration by or against other individuals or 
entities, or arbitrate any claim as a representative member of a class or in a private attorney general 
capacity. Procedures do not and shall not apply to any arbitration between or among you, Valam
and/or any Valam Indemnitees. The arbitrator or arbitral tribunal shall make a decision that is in 
accordance with these Terms of Service, shall apply the law of the State of New Jersey, without regard 
to its conflicts of laws principles, and shall state the basis for any decision in writing. Judgment upon 
the award rendered may be entered in any court having jurisdiction or application may be made to 
such court for judicial acceptance of the award and an order of enforcement as the case may be.

Waiver of Right to Jury Trial

Further to the arbitration provision above, with respect to any dispute, claim, action, or proceeding arising from or in connection with these Terms of Service or the service, you expressly and irrevocably waive any right you may have to a trial by jury and consent to arbitration as set forth in the foregoing arbitration provision.

</p>

<div className="divider" />
<h2>DOWNLOADING AN APPLICATION FROM THE APPLE ITUNES APPLICATION STORE</h2>
<div className="divider" />
<p>
<b>APPLE TERMS:</b> 
<p>If you have obtained an Application from the Apple iTunes Application Store, the 
following additional terms are applicable to such Application (referred to as an “App Store Sourced 
Application”)</p>

<b>YOU ACKNOWLEDGE THAT:</b>
<p>
(i) these Terms of Service are an agreement between you and VALAM only, 
and not with Apple; and (ii) VALAM is solely responsible for the App Store Sourced Application and its 
content as compared to Apple. Your use of the App Store Sourced Application must adhere to the App 
Store Terms of Service.
</p>


<p>
You recognize that Apple has no obligation to provide any maintenance or support services for the 
App Store Sourced Application.
</p>


<p>
In case the App Store Sourced Application fails to meet any applicable warranty, you may notify Apple, 
and Apple will reimburse the purchase price for the App Store Sourced Application. To the maximum 
extent permitted by law, Apple will have no other warranty obligation concerning the App Store 
Sourced Application, and any other claims, losses, liabilities, damages, costs, or expenses arising from 
a failure to meet any warranty will be VALAM’s sole responsibility.

</p>


<p>
You and VALAM acknowledge that Apple is not responsible for addressing any claims by you or a third 
party regarding the App Store Sourced Application or its possession and use, including, but not limited 
to: (i) product liability claims; (ii) claims that the App Store Sourced Application does not comply with 
legal or regulatory requirements; and (iii) claims under consumer protection or similar legislation.
In the event of a third-party claim that the App Store Sourced Application or its possession and use 
infringe on the third party’s intellectual property rights, VALAM, not Apple, will be solely responsible 
for the investigation, defense, settlement, and discharge of any such intellectual property 
infringement claim, as required by these Terms of Service.
</p>

<p>
You and VALAM agree that Apple and its subsidiaries are third-party beneficiaries of these Terms of 
Service in relation to your license of the App Store Sourced Application. Upon your acceptance of the 
terms and conditions of these Terms of Service, Apple will have the right (and will be deemed to have 
accepted the right) to enforce these Terms of Service concerning your license of the App Store Sourced 
Application against you as a third-party beneficiary.
Without limiting any other terms of these Terms of Service, you must comply with all applicable thirdparty terms of agreement when using the App Store Sourced Application.
</p>
</p>
<div className="divider" />

<h4>MISCELLANEOUS</h4>
<p>
These Terms of Service constitute the entire agreement between you and VALAM, outlining the full 
scope of the understanding, and represent the complete liability of VALAM, its affiliates, and licensors. 
It serves as your exclusive remedy regarding the Service and its utilization by you. Any waiver of these 
terms by VALAM must be in writing, signed by an authorized officer of VALAM, and explicitly reference 
these Terms of Service. In case any provision within these Terms of Service is deemed invalid or 
unenforceable under Applicable Law, it will be modified and interpreted to fulfil the objective to the 
greatest extent possible under Applicable Law, and the remaining provisions will continue to be valid 
and effective. These Terms of Service, along with any granted rights and licenses, cannot be 
transferred or assigned by you without the prior written consent of VALAM. VALAM retains the right 
to assign or transfer these Terms of Service or any right or obligation under them to any third party 
without notice or consent. Notwithstanding the above, these Terms of Service shall be binding upon 
and advantageous to the parties involved, including their successors and permitted assigns.

</p>

<div className="divider" />
<h4>CONTACT US</h4>
<p>© 2023 Prastley, LLC. All rights reserved
    <br/>
    <b>Email:</b>   <a href={`mailto:valamnewjersey@gmail.com`}> valamnewjersey@gmail.com</a>.<br/>
<b>Address:</b>  16 Bridge street Metuchen, NJ0884</p>








      
        
         
      <div className="divider" />

      {/* Add more content following the same structure */}
    </div>
    </div>
  );
};

export default TermsandConditions;
