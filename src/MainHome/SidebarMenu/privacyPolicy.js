import React from 'react';
import { useEffect } from 'react';
import './privacyPolicy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft, faAngleRight, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import HomeHeader from '../HomeHeader';
const PrivacyPolicy = () => {
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
          <span className="headerTextongo">Privacy Policy</span>
        </div>
    <div className="privacy-policy-container">
       
         

        <h3 style={{color:"#0e7bf0"}}>Valam Ride-Hailing Platform Privacy Policy</h3>
        <h4>Last Updated: 18 December 2023</h4>

        <p><b>Welcome to Valam,</b> the ride-hailing platform. This Privacy Policy is designed to help you understand 
how we collect, use, share, and protect your information when you use our platform, whether you 
are a rider, driver or a taxi company.
By accessing or using Valam, you agree to the terms of this Privacy Policy. Please take the time to 
read this document carefully</p>

<h4>1. INFORMATION WE COLLECT</h4>
<ul>
  <li>
  <b>For Riders :  </b>
Personal Information: This includes details such as the rider's name, contact information (email, 
phone number), payment information (credit card details), and account credentials (username and 
password).
Location Data: The pickup and drop-off locations are collected for the purpose of providing the taxi 
service.
  </li>
  <br/>
  <li>
  <b>For Drivers :  </b>
Personal Information: Similar to riders, drivers provide their name, contact details, when registering 
with the taxi company.
Location Data: Real-time location data is collected during active service to facilitate ride 
coordination.
  </li>
  <br/>
  <li>
  <b>For Companies :  </b>
Company Information: Taxi Companies shall provide their name, registration details or equivalent 
information, license, other data, payment details and account credentials while registering with 
Valam.
  </li>
</ul>


      
      <div className="divider" />

      <h4>2. HOW WE USE YOUR INFORMATION</h4>
      <ul>
        <li>Provide and Improve Services: The collected information is used to offer and enhance the taxi 
services provided by the company.</li>
        <li>Transaction Processing: Information is used to process payments for the rides.
Safety and Security: Data is employed to ensure the safety and security of both riders and drivers on 
the platform.</li>
        <li>Transaction Processing: Information is used to process payments for the rides.
Safety and Security: Data is employed to ensure the safety and security of both riders and drivers on 
the platform.</li>
      </ul>
    
      <div className="divider" />


<h4>3. INFORMATION SHARING</h4>
<ul>
  <li>User Coordination: Information may be shared with other users to facilitate ride 
coordination.</li>
  <li>Third-Party Providers: The company may engage third-party service providers for various 
operational aspects of the platform.</li>
  <li>Legal and Regulatory Compliance: Information may be disclosed to law enforcement or regulatory 
authorities as required by law</li>
</ul>

<div className="divider" />
<h4>4. DATA SECURITY</h4>
<ul>
  <li>Industry-Standard Security Measures:
The company prioritizes the security and integrity of user data. To achieve this, it employs industrystandard security measures, which align with widely recognized best practices and standards within 
the relevant industry.</li>

<li> Encryption Protocols:
User data is encrypted using robust encryption protocols during transmission and storage. This 
ensures that sensitive information, such as personal details and payment information, is protected 
from interception and unauthorized access.</li>

<li> Secure Sockets Layer (SSL) Technology:
The company leverages Secure Sockets Layer (SSL) technology for secure data transmission over the 
internet. SSL encrypts the communication between users' devices and the platform, safeguarding 
data as it travels across the network.</li>

<li> Access Controls:
Access to user data is strictly controlled. The company implements access controls and 
authentication mechanisms to ensure that only authorized personnel have access to specific types of 
user data, and only for legitimate business purposes.</li>

<li> Multi-Factor Authentication (MFA):
To enhance user account security, the company may implement Multi-Factor Authentication (MFA).
This additional layer of security requires users and authorized personnel to provide multiple forms of 
verification, such as a password and a temporary code sent to their registered device.</li>

<li> Regular Security Audits:
The company conducts regular security audits and assessments to evaluate the effectiveness of its 
security measures. These audits may include penetration testing, vulnerability assessments, and 
code reviews to identify and address potential security vulnerabilities.</li>



</ul>
<div className="divider" />

<h4>5. YOUR CHOICES AND RIGHTS</h4>
<b>Review and Update Information:</b>
<ul>
  <li>
  User Accessibility:
  <br/>
The platform prioritizes user transparency and control over their personal information. To facilitate 
this, users have the right to access and review the personal information stored by the platform. This 
ensures users are well-informed about the data the platform holds about them.
<br/>
  </li>
  <li>
  Accessing Personal Information:
  <br/>
Users can access their personal information by logging into their accounts on the platform. Once 
logged in, there should be a designated section or dashboard where users can view a summary of 
their account details, including personal information such as name, contact details, and payment 
information.
<br/>
  </li>
  <li>
  User-Friendly Interface:
  <br/>
The platform strives to provide a user-friendly interface for reviewing personal information. This 
may involve clear and intuitive navigation menus, informative labels, and tooltips to guide users 
through the process of accessing and reviewing their information.
<br/>
  </li>
  <li>
  Update Mechanism:
  <br/>
In addition to the review process, users have the right to update their personal information. The 
platform ensures that there are straightforward mechanisms in place for users to edit or modify 
their details. This could include editable form fields, checkboxes, or specific buttons for initiating 
updates.
<br/>
  </li>
  <li>
  Types of Information to Update:
  <br/>
Users may be provided with the ability to update various types of information, including contact 
details, payment information, and other relevant account details. Clear instructions guide users on 
the specific fields that can be modified and the steps to be taken for updates to take effect.
<br/>
  </li>
  <li>
  Real-Time Changes:
  <br/>
The platform aims to reflect user updates in real-time. Once changes are made to personal 
information, users should observe the immediate application of these modifications, ensuring an 
accurate representation of their current details within the system.
<br/>
  </li>
  <li>
  Verification and Security:
  <br/>
To maintain the integrity and security of user accounts, certain updates may require additional 
verification steps. This could involve email verification, two-factor authentication, or other secure 
mechanisms to confirm the identity of the user initiating the changes.
<br/>
  </li>

  <li>
  Communication of Changes:
  <br/>
Users are informed about the successful update of their information through confirmation messages 
or notifications. Clear and concise communication ensures users are aware that their changes have 
been applied successfully, contributing to a positive user experience.
<br/>
  </li>

  <li>
  Support for Assistance:
  <br/>
In cases where users encounter challenges during the review or update process, customer support 
or assistance channels are readily available. This ensures that users receive prompt help and 
guidance in navigating the platform's features related to reviewing and updating personal 
information.
<br/>
  </li>

 
  In summary, the platform is committed to empowering users by providing accessible and userfriendly tools for reviewing and updating their personal information, fostering transparency and user 
control over their data.
 
</ul>









<b>Opt-Out Option:</b> 
<ul>
  <li>
  Promotional Communications:
The platform respects user preferences regarding promotional communications. Users have the 
option to opt out of receiving promotional emails, newsletters, or any other marketing messages. 
This ensures that users have control over the type and frequency of promotional content they 
receive from the platform.
  </li>
  <li>
  Opt-Out Mechanism:
An easily accessible and user-friendly opt-out mechanism is provided. This could include an 
"Unsubscribe" link in promotional emails or a dedicated section within the user account settings 
where users can manage their communication preferences.
  </li>
  <li>Prompt Communication Updates:
Once a user opts out, the platform promptly updates its communication systems to respect the 
user's preferences. This ensures that the user's decision to opt out is reflected in subsequent 
communication efforts.</li>
  <li>
  Clarification of Opt-Out Process:
Clear instructions are provided to users on how to opt out. This includes information on where to 
find the opt-out option, what to expect after opting out, and any potential impact on nonpromotional communications (e.g., transactional emails).
  </li>
  
</ul>

<b>Account Deletion:</b>
<ul>
  <li>
   User Initiated Request:
Users have the right to request the deletion of their account. This process is initiated by the user, 
and the platform acknowledges and respects their decision to discontinue using the services.
  </li>
  <li>
  The platform provides a straightforward mechanism for users to request the deletion of their 
accounts. This could involve a dedicated "Delete Account" option within account settings or a 
contact form specifically designed for account deletion requests.
  </li>
  <li>
  Verification Process:
To ensure the security of user accounts, account deletion requests may be subject to a verification 
process. This could involve confirming the identity of the user through additional steps, such as 
email verification or entering account credentials.
  </li>
  <li>Legal and Contractual Obligations:
Users are informed that account deletion is subject to legal and contractual obligations. The 
platform may need to retain certain information for a specified period due to legal requirements or 
to fulfill contractual obligations (e.g., processing outstanding transactions or resolving disputes).</li>

<li>
Confirmation of Deletion:
Upon successful completion of the account deletion process, users receive confirmation. This may 
include a confirmation message on the platform, an email notification, or both, assuring users that 
their account and associated data have been permanently deleted.
</li>

/<li>
Data Retention Periods:
Users are informed about the platform's data retention policies. Even after account deletion, certain 
data may be retained for a specific period as required by law or for legitimate business purposes. 
This information is communicated transparently to users.
</li>

<li>Support for Assistance:
Should users encounter any challenges during the account deletion process or have questions about 
the implications of account deletion, customer support or assistance channels are available to 
provide guidance and support.</li>
</ul>

<p>
In summary, the platform provides users with the autonomy to opt out of promotional 
communications and offers a user-initiated account deletion process with transparent 
communication about legal and contractual obligations, ensuring a clear and respectful approach to 
user preferences and choices.
</p>



<div className="divider" />
<h4>6. COOKIES AND TRACKING TECHNOLOGIES</h4>
<ul>
  <li>Enhancing User Experience:<br/>
  <br/>Personalization:
   Cookies are small text files stored on users' devices. They help in remembering user 
preferences, such as language preferences, location settings, and display preferences. This enables a 
more personalized and seamless user experience, allowing users to navigate the platform efficiently.
Authentication: Cookies play a crucial role in user authentication. They help recognize and 
authenticate users, allowing them to stay logged in and access personalized features without having 
to re-enter login credentials every time they visit the platform.
<br/><br/>Session Management: <br/>Session cookies are used to track user sessions, ensuring the continuity of 
interactions. This is particularly important during a single session, such as when a user is completing 
a booking or navigating through different pages.</li>
<br/>
  <li>Collecting Data for Analytics:
  <br/>
    <br/>
(a) Usage Analysis: <br/>Cookies and similar technologies enable the collection of anonymized data 
related to user interactions with the platform. This includes information about pages visited, 
features used, and the duration of the visit. This data is valuable for understanding how 
users engage with the platform.
<br/>
<br/>
(b) Performance Metrics: <br/>Analytics tools utilize cookies to gather performance metrics, such as 
page load times and response times. This information helps in identifying and resolving any 
issues that may impact the overall performance and user experience.
<br/>
<br/>
(c) User Behavior: <br/>By analyzing aggregated and anonymized data from cookies, the platform can 
gain insights into user behavior. This includes understanding popular routes, peak usage 
times, and user preferences. These insights contribute to strategic decision-making and 
service improvements.
<br/>
</li>
<br/>
<li>Optimization and Customization:
<br/>
<br/>
  (a) Content Optimization: 
 
  <br/>Cookies are used to optimize the delivery of content to users. This 
may involve tailoring content based on user preferences, location, or previous interactions, 
ensuring that users receive relevant and engaging information.
<br/>
<br/>
(b) Advertising Personalization:
<br/> Cookies support targeted advertising efforts. By tracking users' 
online behavior, the platform can provide more relevant and personalized advertisements. 
This benefits both users, who see more meaningful content, and advertisers, who can better 
reach their target audience.

</li>
<br/><br/>
<li>User Consent and Control:
<br/><br/>
  (a) Cookie Consent:
  <br/> The platform ensures transparency and compliance with privacy regulations 
by obtaining user consent for the use of cookies. Users are typically presented with a cookie 
banner or pop-up that explains the types of cookies used and provides options to accept or 
manage preferences.
<br/><br/>

(b) Cookie Settings:<br/> Users have the ability to control and customize their cookie preferences. 
This may include opting out of certain types of cookies or adjusting settings for personalized 
experiences. The platform respects user choices and provides clear mechanisms for 
managing cookie preferences.
</li>
<br/>

In summary, cookies and similar technologies play a multifaceted role in enhancing user experience, 
optimizing platform performance, and providing valuable insights through analytics. It's important 
for the platform to maintain transparency, obtain user consent, and offer control mechanisms to 
ensure a privacy-conscious and user-friendly experience.
 
</ul>


<div className="divider" />

<h4>7. CHANGES TO THIS PRIVACY POLICY</h4> 

<p>Periodic Updates: The company may update the Privacy Policy periodically, and users can find the 
latest version on the company's website or mobile app. Periodic Updates to Privacy Policy:</p>

<ul>
  <li>Purpose of Updates:
    <p>The Privacy Policy is a living document that reflects the company's commitment to protecting user 
privacy and maintaining transparency. Periodic updates are made to ensure that the policy aligns 
with evolving legal requirements, industry standards, and changes in the company's practices.</p>
  </li>

  <li>Notification of Changes:
    <p>When significant updates are made to the Privacy Policy, the company is committed to informing 
users about these changes. This may involve sending notifications via email, app notifications, or 
other communication channels. Users are encouraged to review the updated policy to stay informed 
about how their data is handled.</p>
  </li>

  <li>Accessing the Latest Version:
    <p>Users can easily access the most recent version of the Privacy Policy. The updated policy is made 
available on the company's official website and mobile app. Clear links or notifications within the 
platform direct users to the Privacy Policy, making it easily accessible for review.</p>
  </li>

  <li>User Responsibilities:
    <p>Users are encouraged to periodically review the Privacy Policy to stay informed about any changes. 
By continuing to use the services provided by the company after an update, users implicitly agree to 
the revised terms outlined in the latest version of the Privacy Policy.</p>
  </li>

  <li>Version Control:
    <p>The company may implement version control mechanisms within the Privacy Policy. This helps users 
identify the specific changes made in each update. Version numbers, timestamps, or a changelog 
may be provided to offer transparency regarding the modifications.</p>
  </li>

  <li>Feedback and Questions::
    <p>The company values user feedback and encourages users to reach out with any questions or 
concerns regarding the Privacy Policy updates. Contact information for inquiries is provided within 
the policy, establishing an open channel for communication between the company and its users.</p>
  </li>

  <li>Consent Mechanisms:
    <p>Users may be prompted to provide their consent to the updated Privacy Policy, particularly if the 
changes have a material impact on data processing practices. Consent mechanisms, such as 
checkboxes or confirmation buttons, may be implemented to ensure users actively acknowledge and 
agree to the revised terms.</p>
  </li>

  <li>Compliance with Regulations:
    <p>Periodic updates are conducted with a commitment to compliance with applicable data protection 
regulations. The company strives to uphold the highest standards of privacy and data security, 
aligning its practices with legal requirements and industry best practices.</p>
  </li>
</ul>




In summary, periodic updates to the Privacy Policy serve the purpose of keeping users informed, 
maintaining legal compliance, and adapting to the dynamic nature of data protection regulations. 
The company's commitment to transparency and user communication is reflected in the clear 
mechanisms provided for accessing and understanding the latest version of the Privacy Policy.

<div className="divider" />
<h4>8. CONTACT US</h4>
Communication Channel: Users can reach out for any questions or concerns through the provided 
contact information,
<br/>
<p>
<b>Email :  </b>   <a href={`mailto:valamnewjersey@gmail.com`}> valamnewjersey@gmail.com</a>.<br/>
<b>Address :  </b>  16 Bridge street Metuchen, NJ0884</p>
 


By using our services, you acknowledge that you have read, understood, and agree to abide by the 
Privacy Policy outlined herein.
<br/>
<br/>
© 2023 Prastley, LLC. All rights reserve

     
    
    </div>
    </div>
  );
};

export default PrivacyPolicy;
