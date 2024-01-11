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
       
         

        <p>We understand how much you value your privacy and we are committed to keeping your privacy intact. For that purpose you may at first need to understand our Privacy Practices.</p>
        <h4>Last Updated: 03 September 2021</h4>
      
      <div className="divider" />

      <p>
        This Privacy Policy applies to the services offered by Valam (we, our, us) and this does not apply to services that have separate Privacy Policies that do not incorporate this Privacy Policy. We are committed to protecting and respecting your privacy as we comply with the N.J.S.A. 56:8-161 et seq, FTC Regulations and New Jersey Consumer Fraud Act. We want you to understand that
        <a href="http://www.valam.net/" className="link">
          www.valam.net
        </a>
        will obtain and collect some data that you provide with us to operate, provide, improve, understand, customize, support, and market our Services, including when you install, access, or use our Services.
        <br />
        <br />
        <div className="divider1" />
        <p style={{color:"orange"}}><b>Information you submit V/s Information we collect</b></p>
        
       
        <div className="divider1" />
        
      </p>

      <h4>1) Regarding the Personal Data:</h4>
      <h4>What Information is collected?</h4>
      <p>
        The types of information we receive and collect depend on how you use our Services. We require certain information to deliver our Services and without this, we will not be able to provide our Services to you. For example, you must create a user id and password from your device to create an account to use our Services.
      </p>

      <h3 style={{textAlign:"center"}}>Information you submit to us</h3>
      <h4>Data collected from Customers:</h4>
      <p>
        Data provided to us during the instance of an account creation.. This may include information such as Name; Mobile number; Email ID; Address; Device’s Location; Profile Picture; Payment Information which will include your Account Number; Demographic data; Login Name and User Password may also be collected and we encourage you not to disclose them with anyone.
      </p>

      <h4>Data collected from Drivers:</h4>
      <p>
        This may include Name; Mobile Number; Email ID; Address; Device’s Location; Profile Picture; Demographic Data; Driving License Information; Login Name and User Password may also be collected and we encourage you not to disclose them with anyone.
      </p>

      <h4>Payment Information with respect to Drivers:</h4>
      <p>
        The Payment of the drivers shall be vested with the respective Taxi Transportation Company that they belong to or are registered with and hence Valam shall not be held responsible for the payment of the Drivers. Thus, we shall not collect the Payment Information of the Drivers.
      </p>

      <h4>Data collected from Companies:</h4>
      <p>
      We will collect the following information from the companies in order to provide a smooth function of our services. The information collected will include, Name of the Company, Type/ Status of Company, Registration Number of the Company, Payment Information with respect to the Company which include,1) Name of the Bank; 2) Account Number; 3) Other details which may be necessary for Money Transaction. We will also collect information such as contact information from Companies which includes, 1) Phone Number; 2) Email; 3) Address.
      </p>

      <h3 style={{textAlign:"center"}}>Information we collect</h3>
      <p>
      Our primary goal in collecting your information is to provide you with an enhanced experience when using our Services. We use your information to closely monitor which features of the Services are used most, to allow you to view your trip history, rate trips, and to determine which features we need to focus on improving, including usage patterns and geographic locations to determine where we should offer or focus services, features and/or resources.
      </p>
      <h4>Transaction and Payment Information:</h4>
      <p>
      If you use our payments services, or use our Services meant for purchases or other financial transactions, we process additional information about you, including payment account and transaction information. Payment account and transaction information includes information needed to complete the transaction. Payment Information will be stored in encrypted form.
      </p>

      <h4>IP Address:</h4>
      <p>
      We use your Internet Protocol (IP) address to help diagnose problems with our computer server, and to administer our web site(s). Your IP address is used to help identify you, but contains no personal information about you. We use the information collected from our Mobile Application so that we are able to serve you the correct app version depending on your device type, for troubleshooting and in some cases, marketing purposes.
      </p>

      <h4>Ratings and Feedback:</h4>
      <p>
      When you rate and provide feedback about Drivers, or Companies we collect all of the information you provide in your feedback.
      </p>


      
      <h3 style={{textAlign:"center"}}>Understanding the Cookie Policy</h3>
      <h4>Cookie Policy with respect to Customers:</h4>
      <p>
      We collect information through the use of “cookies” technologies to understand how you navigate through our Platform and interact with our advertisements, to make your experience safer, to learn what content is popular, to improve your site experience, to serve you better ads on other sites, and to save your preferences.

      </p>
      <h4>Cookie Policy with respect to Drivers:</h4>
      <p>
      We use cookies to operate and provide our Services, including to provide our Services that are web-based, improve your experiences, understand how our Services are being used, and customize them. For example, we use cookies to provide our Services for web and desktop and other web-based services. We may also use cookies to understand which of our Help Center articles are most popular and to show you relevant content related to our Services. Additionally, we may use cookies to remember your choices, to provide a safer experience, and otherwise to customize our Services for you.
      </p>

      <h4>Cookie Policy with respect to Companies:</h4>
      <p>
      We collect information to understand a user’s preferences and remember the settings. This may be through cookies (a small text file placed on one’s device by the app/website) or pixel tags (a block of code on a website allowing it to retrieve certain information about one’s device/browser). Our Cookie Policy explains that it allows certain third parties (such as Google and Facebook) to place cookies on a user’s device to help deliver its services and for advertising purposes. Most third-party analytics tools collect only the IP address assigned to you on the date you visit our website, rather than your name or other identifying information. Although third-party analytics tools store a cookie on your machine to identify you as a unique user the next time you visit our site, the cookie typically cannot be used by anyone but that third party. Some of these third-party service providers may collect information from our website for retargeting and interest-based advertising.
      </p>

      <h3 style={{textAlign:"center"}}>Third Party Services:</h3>
      <p>
      Third parties, including our service providers, may collect information about your online activities over time and across different websites, including when you visit this website. The Services may contain content that is supplied by a third party, and those third parties may collect website usage information and your Device Identifier when web pages from any online or mobile Services are served to your browser.
      </p>

      <p>
      In addition, when you are using the Services, you may be directed to other sites or applications that are operated and controlled by third parties that we do not control. We are not responsible for the privacy practices employed by any of these third parties. These other web sites may send their own cookies to you, independently collect data or solicit Protected Information and may or may not have their own published privacy policies.
      </p>

      <h3 style={{textAlign:"center"}}>Usage of Information/ Data:</h3>
      <p>
      Usage information such as information about your use of our Platform, including ride information like the date, time, destination, distance, route, payment, and whether you used a promotional or referral code. We also collect information about your interactions with our Platform like our apps and websites, including the pages and content you view and the dates and times of your use.
      </p>
      <p>We at <a href="http://www.valam.net/">www.valam.net</a> do not sell your data to third parties as we hold the principle of integrity and abide by the Data Breach Policy and Cyber Rules and Regulations of New Jersey.</p>

      <div className="divider1" />
      <p style={{color:"orange"}}><b>How we use your data V/s Why we use your data?</b></p>
      <div className="divider1" />
      <h4>How we Use?</h4>
      <p>We will process the data provided by you and find the service that is requested by you and portraying an array of options for you to choose from. For Example,1) If you are a customer in need of taxi service, we will show you the available taxi services near you after processing your data including your location. 2) If you are a Taxi Transportation Company, we will notify you and connect you with the customers who need a Cab or Taxi service right away.</p>
      <p>We will use the data and other information we procure from you to help improve ourselves and our services such as a feedback. We will use your information to also to manage your Account and to understand how you use our website.</p>
      <h4>
      Why we use?
      </h4>
      <p>
      We use the data collected to ensure our quality with respect to the service provided and for providing customer support. We also use the data for accessing and processing payment and to send marketing and non-marketing communications to users. We also use the data for conducting analysis for understanding the peak hours; most travelled routes, and most travelled destinations using our survey and target groups.
      </p>
      <h3 style={{textAlign:"center"}}>Promotional and Marketing Activities</h3>
      <p>We will use your contact information shared with us, including your Email ID, Address, and Phone number, to communicate our promotional schemes or promote any product offered by us or by our affiliates and group companies.</p>
      <h3 style={{textAlign:"center"}}>Communication Preferences</h3>
      <p>You may also cancel or modify your communications that you have elected to receive from the Services by following the instructions contained within an e-mail or by logging into your user account or by Emailing us and changing your communication preferences.</p>
      <h3 style={{textAlign:"center"}}>Security of Information/ Data</h3>
      <div className="divider1" />
      <p style={{color:"orange"}}><b>Disclosure of data V/s Confidentiality of Data</b></p>
      <div className="divider1" />
      <h4>Disclosure of Data:</h4>
      <h4>Sharing of Data With Customers:</h4>
      <h4>About the Driver:</h4>
      <p>We might need to share the information of the Driver such as Name, Medium of Transportation, Vehicle Number, Vehicle Model, and Vehicle color, Current Location, Phone Number, Ratings or Feedbacks which may be provided by the company where you are registered as a driver with.</p>

      <h4>About the Taxi Company (Transportation Service Provider):</h4>
      <p>Details of the respective Transportation Service Provider Company will be shared with the customers so that they can learn about you, know the Company Status and Statistics and choose the required service and enjoy the ride.</p>

      <p>We will share your information with you on such request.</p>
      <h4>Sharing of Data With Drivers:</h4>
      <p>When you as a customer have booked a Taxi/ Cab using our platform, we might need to share your data such as Name, Address, Phone Number and Location, destination, Additional Stops, Information to help reach the services to your doorstep.</p>

      <h4>Sharing of Data With Companies:</h4>
      <p>
        We might need to share your data such as Name, Phone Number, Address with Taxi Transportation Companies to help you receive appropriate services.
        </p>
        <h4>For Legal Proceeding:</h4>
        <p>In case we suspect that the safety of our platform is under risk, or if a fraud is found we might need to disclose your Information/Data for legal purposes. We may disclose your personal information to law enforcement authorities, other government or public agencies or officials, regulators, and/or to any other person or entity having appropriate legal authority or justification for receipt of your information, if required or permitted to do so by law or legal process, in order to respond to claims, or to protect our rights, interests, privacy, property or safety, and/or that of our affiliates, you or other third parties.</p>
        <h4>Confidentiality of Data:</h4>
        <p>The Protected Information and Usage Information we collect is securely stored within our databases, and we use standard, industry-wide, commercially reasonable security practices such as encryption, firewalls and SSL (Secure Socket Layers) for protecting your information. </p>
        <p>However, as effective as encryption technology is, no security system is impenetrable. We cannot guarantee the security of our databases, nor can we guarantee that information you supply won't be intercepted while being transmitted to us over the Internet or wireless communication, and any information you transmit to the Company you do at your own risk. We recommend that you not disclose your password to anyone</p>


        <h3 style={{textAlign:"center"}}>Children’s Privacy</h3>
       <p>We do not intend to store or use the data from children (Customers) below the age of ‘Thirteen’ (13) with respect to the COPPA Regulations. Any such information accessed, will be done only after a verifiable parental consent is obtained and will be subject to immediate deletion once the purpose is met for which the data was collected.</p>

       <h3 style={{textAlign:"center"}}>Volatile Nature of an Information/Data</h3>
       <div className='divider1'/>
       <h4>Creation of an Account V/s Deletion of an Account</h4>
       <div className='divider1'/>
        <h4>Creation of an Account:</h4>
        <p>You are responsible for maintaining the accuracy of the information you submit to us, such as your contact information provided as part of account registration. Upon creating an Account, make sure that the details provided by you are accurate and to the best of your knowledge.</p>
        <h4>Deletion of an Account:</h4>
       <p>If your Protected Information changes, or if you no longer desire our Services, you may correct, delete inaccuracies, or amend information by making the change on our member information page or by contacting us through email address mentioned on our website or Mobile Application. We will make good faith efforts to make requested changes in our then active databases as soon as reasonably practicable.</p>

       <h3 style={{textAlign:"center"}}>Your Rights:</h3>
       <p>When you are providing with us your valuable data, we understand that it is important to let you know your rights. With respect to the applicable rules and regulations, you may withdraw any consent that you have provided to us to process your information at any time. You may have rights to access the personal information we process about you. You may request we delete personal information we hold about you under the Right to Delete.</p>
        <h3 style={{textAlign:"center"}}>Changes to our Policy:</h3>
       
        <p>From time to time, we may update this Privacy Policy to reflect changes to our information practices. Any changes will come into effect immediately upon the posting of the revised Privacy Policy. Upon such changes, we will notify you by email (sent to the e-mail address specified in your account) or by means of a notice on the Services prior to the change becoming effective. We also encourage you to periodically review this page for the latest information on our privacy practices.</p>
        <div className="divider" />
        <h3 style={{textAlign:"center"}}>Contact Us:</h3>
        <p>If you require any information or clarification regarding the use of Your Personal Information or this Privacy Policy, you can contact via our site <a href='http://www.valam.net/'>www.valam.net</a> (or) call us at <a href={`tel:+1 (347)998-4073`}>+1 (347)998-4073</a> </p>

       
          
        
          <p>
         If you have any grievance with respect to usage of Your Personal Information, please write to us at
         <a href={`mailto:dbjenil@yahoo.com`}> dbjenil@yahoo.com</a>.
         
         </p>
         <p><b>Address:</b>  Valam llc,1901 Mindy Lane, Piscataway,New Jersey- 08854 </p>

       



      <div className="divider" />

      {/* Add more content following the same structure */}
    </div>
    </div>
  );
};

export default PrivacyPolicy;
