import React from "react";
import Reveal from 'react-awesome-reveal';
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { fadeInUp } from '../../utils';

const data = [
  {
    title: "How to protect your Wi-Fi network effectively?",
    description: "By implementing these strategies, you can significantly enhance the security of your Wi-Fi network, making it more difficult for unauthorized users to gain access. Regularly reviewing and updating your security practices is essential to staying protected against evolving threats."
  },
  {
    title: "The best alarm systems for small apartments",
    description: "Selecting the right alarm system for your small apartment involves weighing your specific needs, preferences, and budget. The systems listed above are among the best options available, providing a blend of security, ease of use, and flexibility suitable for apartment living."
  },
  {
    title: "IT security measures for small businesses",
    description: `By implementing these IT security measures, small businesses can significantly reduce their vulnerability to cyber threats and establish a culture of security awareness. While no system can be completely foolproof, proactive steps taken to fortify your security posture can help protect your business against potential risks.`
  },
  {
    title: "Secure password policies for teams",
    description: "Implementing and maintaining a secure password policy is crucial for safeguarding a team's data and systems against cyber threats. Regularly review and update the policy as organizational needs and risks evolve, ensuring continuous improvement in password security practices."
  },
  {
    title: "Making remote work secure (VPN, device encryption)",
    description: `By implementing these measures, organizations can enhance the security of remote work environments, reducing the risk of data breaches while maintaining productivity. The key is to adopt a multi-layered security approach that combines technology, employee training, and robust policies to create a secure remote work culture. Regularly assess and update these practices to adapt to new security threats and ensure ongoing protection.`
  },
  {
    title: "Recognizing and avoiding phishing",
    description: `Phishing is a prevalent cyber threat where attackers impersonate legitimate organizations or individuals to deceive users into revealing sensitive information, such as passwords, credit card numbers, or other personal data. Recognizing and avoiding phishing attacks is essential for maintaining individual and organizational security.`
  },
  {
    title: "The best password managers compared",
    description: "When choosing a password manager, consider your specific needs, such as whether you want a free option, features like a built-in VPN, or password sharing capabilities. All listed password managers provide robust security features, but the right choice will depend on your individual or organizational requirements. Before committing, it's often worthwhile to take advantage of free trials to explore the interface and features of the options you're considering."
  },
  {
    title: "Case studies: How we restored hacked websites",
    description: `Each of these case studies illustrates a systematic approach to responding to and recovering from a website hack. Key elements include immediate response, thorough investigation, restoration from backups, the implementation of robust security measures, and transparent communication with users. Organizations can learn from these steps to develop their response plans and improve their overall cybersecurity posture. Regular audits, software updates, and education about common threats can further aid in prevention.`
  },
  {
    title: "Trends and threats in cybercrime",
    description: `The landscape of cybercrime continues to evolve, making it essential for organizations and individuals to stay informed about emerging trends and threats. Ongoing education, implementing robust security measures, and adopting a proactive approach to cybersecurity can help mitigate the risks associated with these trends and evolving threats. Regular risk assessments and employee training are crucial to staying one step ahead of potential cybercriminal activities.`
  }
]

const Faq = () => {
  return (
    <div className="relative">
      <img className="bg-icon3" src="./img/icons/bg-icon.png" alt=""></img>
      <div className='faq-light'>
        <div className='flash-light'></div>
      </div>
      <div className='token-star-group'>
        <img className='star1' src="./images/banner/star.png" alt="" />
        <img className='star2' src="./images/banner/star.png" alt="" />
        <img className='star3' src="./images/banner/star.png" alt="" />
        <img className='star4' src="./images/banner/small-star.png" alt="" />
        <img className='star5' src="./images/banner/small-star.png" alt="" />
        <img className='star6' src="./images/banner/small-star.png" alt="" />
        <img className='star7' src="./images/banner/small-star.png" alt="" />
        <img className='star8' src="./images/banner/small-star.png" alt="" />
        <img className='star9' src="./images/banner/small-star.png" alt="" />
        <img className='planet' src="./images/banner/planet.png" alt="" />
        <img className='planet2' src="./images/banner/planet2.png" alt="" />
        <img className='line' src="./images/banner/line1.png" alt="" />
      </div>
      <Container>
        <div className="faqs_block mt-[50px] mb-[80px]">
          <div className="faqs_inner">
            <Row className="justify-content-center">
              <Col xs={12} lg={9} className="text-center">
                <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                  <h3 className="text-[50px] md:text-[40px] font-semibold text-white text-center">Blog</h3>
                </Reveal>
              </Col>
            </Row>

            <Row className="justify-content-center mt-4 sm:px-5">
              <Col xs={12} lg={12}>
                <Accordion>
                  <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={300} triggerOnce cascade>
                    {data.map((item, id) => (
                      <Accordion.Item eventKey={id} key={id}>
                        <Accordion.Header>{item.title}</Accordion.Header>
                        <Accordion.Body className="pt-1">
                          {item.description}
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Reveal>
                </Accordion>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
      <img className="bg-icon4" src="./img/icons/bg-icon.png" alt=""></img>
    </div>
  )
}

export default Faq;