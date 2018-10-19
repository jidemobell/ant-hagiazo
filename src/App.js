import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Scroll from 'react-scroll';
import {
  Layout,
  Card,
  Menu, 
  Row, 
  Col, 
  Carousel, 
  Icon, 
  Divider, 
  Form,
  Input,
  Button,
} from 'antd';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

import { 
  backpic2, 
  periscope, 
  logo, 
  backpic3, 
  backpic4, 
  prophetic,
  unsplash1,
  unsplash2,
  unsplash3,
  unsplash4,
  two1,
  iffacebook,
  iftwitter,
} from './images/imageConstants';
import ContactUs from './components/Contact/ContactForm';
import Slideshow from './components/slideshow/Slideshow';
import Intro from './components/Reveals/intro';
import Donate from './components/Donate/Donate';

const { Header, Content, Footer } = Layout;

const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scrollSpy  = Scroll.scrollSpy;
const scroller = Scroll.scroller;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      revealModal: false,
    };
    this.showModal = this.showModal.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', (to, element) => {
      // console.log("begin", arguments);
    });
 
    Events.scrollEvent.register('end', (to, element) => {
     // console.log("end", arguments);
    });
 
    scrollSpy.update();
 
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  // scrollToTop() {
  //   scroll.scrollToTop();
  // }

  // scrollTo() {
  //   scroll.scrollTo(900);
  // }

  showModal() {
    this.setState({
      revealModal: true,
    });
  }

  render() {
    return (
      <div>
        <Donate show={this.state.revealModal} />
        <Layout className="layout">
          <Header
            style={{
              position: 'fixed',
              zIndex: 1,
              width: '100%' }}
          >
            {/* <div className="logo" /> */}
            <div className="logo">
              <img alt="logo" src={logo} style={{ height: 50, width: 50 }} />
            </div>
            <div className="menulist">
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
              className="menu-navs"   
            >
              <Menu.Item key="1"><div onClick={() => scroll.scrollToTop()}>Home</div></Menu.Item>
              <Menu.Item key="2"><div onClick={() => scroll.scrollTo(400)}>About</div></Menu.Item>
              <Menu.Item key="3">Ministries</Menu.Item>
              <Menu.Item key="4"><div onClick={() => scroll.scrollTo(950)}>Give</div></Menu.Item>
              <Menu.Item key="5"><div onClick={() => scroll.scrollTo(1520)}>Contact Us</div></Menu.Item>
              <Menu.Item key="6" style={{ float: 'right' }}><img src={iffacebook} className="header-image shake-slow" alt="facebook"/></Menu.Item>
              <Menu.Item key="7" style={{ float: 'right' }}><img src={iftwitter} className="header-image shake-slow" alt="twitter"/></Menu.Item>

            </Menu>
            </div>
          </Header>
          <Carousel
            autoplay
            className="head-carousel"
            effect="scroll"
            dots="false"
            autoplaySpeed={8000}
            // style={{height: 300}}
          >
            <div className="head-slide slide1">
            <div className="hero1">
              <Fade left> 
              <h1>
             Welcome to Paul Hagiazo Ministries
             </h1> 
             </Fade>
             <br />
            </div>
            <div className="overlay"></div>
            <img src={backpic4} alt="back4" style={{width: '100%'}} />
            </div>
            <div className="head-slde slide1">
             <img src={unsplash1} alt="unsplash1" style={{width: '100%', height: 450}} />
            </div>
            <div className="head-slde slide1">
             <img src={unsplash3} alt="unpsplash2" style={{width: '100%', height: 450}} />
            </div>
            <div className="head-slde slide1">
             <img src={unsplash4} alt="unpsplash2" style={{width: '100%', height: 450}} />
            </div>
          </Carousel>
          <Content style={{ padding: '0 0px', marginTop: `-5px` }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Row gutter={16} className="about">
               
                <Col className="gutter-row" span={8}>
                
                  <div className="gutter-box">
                  <Fade left>
                    <p>
                      <span className="first-letter">W</span>elcome to Saint Paul Hagiazo Ministries.
                      Prophet Hagiazo is the Founder and President of Voice of Fire Ministries where we bring the gospel of Christ
                      to the end of the earth through various platforms.
                    Preaching the message of hope and love, and leading sinners to the cross.
                    join us to reach more people across the World. We love you.
                    </p>
                    </Fade>
                  </div>
                  
                </Col>
                
                
                <Col className="gutter-row" span={8}>
                  <div className="gutter-box">
                    <p>
                      <span className="first-letter">O</span>ur vision is to bring the light of God's word to as many people as possible.
                    Feel free to join our any of our services on all our various outreach channel. 
                    Or send us a mail: info@paulhagiazo.com
                    </p>
                  </div>
                </Col>
                <Fade right>
                <Col className="gutter-row" span={8}>
                  <div className="gutter-box">
                    <img src={backpic2} alt="example" />
                  </div>
                </Col>
                </Fade>
              </Row>
            </div>
          </Content>
          <Content 
           className="icon-wrapper" 
           style={{ marginTop: 0, paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 150 }} 
           className="info-wrapper"
          >
           <div style={{ background: '#F0F2F5', padding: 24, minHeight: 280, marginLeft: 0, width: '50%' }}>
            <Row className="icons-row" gutter={16} type="flex">
              <Col className="gutter-row" span={12}>
                <div className="gutter-box icons-col">
                  <span className="span-icons">
                    <Icon type="hourglass" theme="twoTone" />
                  </span>
                  <h4>Services</h4>
                  <p>
                  Sunday Main Service: 10:00 – 12:00pm
                    <br />
                  Wednesday: Believers Bible Class: 18:00 – 20:00
                  </p>
                </div>
              </Col>
              <Col className="gutter-row" span={12}>
                <div className="gutter-box icons-col">
                  <span className="span-icons">
                    <Icon type="skin" theme="twoTone" />
                  </span>
                  <h4>What Should I Wear?</h4>
                  <p>
                  Sunday Main Service: 10:00 – 12:00pm
                    <br />
                  Wednesday: Believers Bible Class: 18:00 – 20:00
                  </p>
                </div>
              </Col>
            </Row>
            </div>
          </Content>
          {/* Donations & Partnership */}
          <Content style={{ padding: '100 0px', marginTop: 0 }}>
            <div style={{ background: '#fff', padding: 50, minHeight: 280 }}>
              <Row type="flex" justify="center">
                <Col
                  span={6}
                  style={{
                    // borderBottom: "3px #1890FF solid",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: 30,
                    color: '#54CD38' }}
                >
                  <span style={{ marginRight: 10 }}>
                      GIVE
                  </span>
                  <FontAwesomeIcon icon="hand-holding-heart" />
                </Col>
              </Row>
              <Row>
                <Col span={12} offset={6} className="donate-header">
                  <div style={{ marginLeft: 15 }}>
                    <h1>HELPING THE CHURCH TO SERVE OTHERS</h1>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={24} className="donate-header">
                  <Carousel autoplay className="word-carousel" autoplaySpeed={8000}>
                    <div className="word-slide"><h3>
                    <FontAwesomeIcon icon="quote-left" style={{marginRight: 5}}/>
                       Now Isaac sowed in that land and reaped in the same year a hundredfold
                       <FontAwesomeIcon icon="quote-right" style={{marginLeft: 5}}/>
                      </h3></div>
                    <div className="word-slide"><h3>
                    <FontAwesomeIcon icon="quote-left" style={{marginRight: 5}}/>
                      Give and it shall be given unto you 
                      <FontAwesomeIcon icon="quote-right" style={{marginLeft: 5}} />
                      </h3></div>
                  </Carousel>
                </Col>
              </Row>
              <Row type="flex" justify="center">
                <Col span={8}>
                  <Divider orientation="center" />
                </Col>
              </Row>
              <Row type="flex" justify="center" gutter={16}>
              
                <Col span={8}>
                 <Fade left>
                  <Card className="donate-card ">
                    <div className="gutter-box">
                      <h4>WORSHIP SERVICES</h4>
                      <Divider><FontAwesomeIcon icon="ribbon" style={{color: '#54CD38'}} /></Divider>
                      <p>
                       During the weekend services (and mid-week services) we have a
                       time of dedicating our tithes and offerings to God in prayer.
                       This is an opportunity to give to God during the service.
                      </p>
                      <a href="https://www.paypal.me" target="_blank" style={{textDecoration: 'none'}}> <h6>GIVE NOW</h6> </a>
                    </div>
                  </Card>
                  </Fade>
                </Col>
                <Col span={8}>
                <Fade right>
                  <Card className="donate-card">
                    <div className="gutter-box">
                      <h4>PARTNER WITH US</h4>
                      <Divider><FontAwesomeIcon icon="ribbon" style={{color: '#54CD38'}}/></Divider>
                      <p>
                       Partner with Prophet Saint Paul Hagiazo and enjoy
                       the benefit of a one on one counselling sessions
                       with the Prophet. Attend our seminars and classes
                       and get offers on ministry books.
                      </p>
                      <a href="#" style={{textDecoration: 'none'}} onClick={this.showModal}><h6>PARTNER</h6></a>
                    </div>
                  </Card>
                  </Fade>
                </Col>
              </Row>
            </div>
          </Content>
          <Content style={{ padding: '0 0px', marginTop: 0 }}>
            <div style={{ background: '#147BD1', padding: 24, minHeight: 100 }}>
              <Row type="flex" justify="center">
                <Col span={16} className="periscope-badge">
                  <h1>Connect live with Prophet Hagiazo on Periscope</h1>
                </Col>
                <Col span={6} className="periscope-badge">
                  <a href="https://www.pscp.tv/PaulHagiazo" target="_blank" style={{textDecoration: 'none'}}>
                  <Card
                    hoverable
                    style={{ width: 50, height: 50 }}
                    className="periscoper"
                    cover={<img alt="example" src={periscope}  />}
                  >
                  </Card>
                  </a>
                </Col>
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center', background: '#001529', color: '#A6ADB4' }}>
             <Content>
               <Row gutter={16}>
                  <Col span={8} className="location">
                    <h4>OUR LOCATION</h4>
                    <br />
                    <p>
                    <FontAwesomeIcon icon="map-marker-alt" style={{ color: 'white', marginRight: 5}}/>
                    Vaal University of Technology (VUT) <br />
                    Vanderbjl Park, <br />
                    GW006
                    </p>
                    <span>
                    <FontAwesomeIcon icon="envelope" style={{ color: 'white', marginRight: 5}}/>
                      info@saintpaulhagiazo.com</span> <br />
                    <span>
                    <FontAwesomeIcon icon="phone" style={{ color: 'white', marginRight: 5}}/> 
                      +27 71 557 1362</span>
                  </Col>
                  <Col span={8} className="store">
                    <Row>
                       <Col span={24} className="storetext">
                         <h4>STORE</h4>
                         <p>The Prophetic Genesis: A journey to the miraculous.</p>
                         <p>We have people who are born to be Prophets and we have people 
                           who are called to the prophetic. Those who are born to be prophets 
                           are born with the spirit of the prophetic in them but those who 
                           are called to the prophetic receive the prophetic Spirit in them
                          </p>
                       </Col>
                    </Row>
                    <Row>
                       <Col span={12}>
                       <p>
                    PRODUCT DETAILS: <br />
                    File Size: 239.0 KB <br />
                    Print: 57 pages <br />
                    Language: English <br />
                    Word Wise: Enabled <br />
                    Format: PDF
                    </p>
                    <span><Button>PRICE: $20</Button></span>
                       </Col>
                       <Col span={12}>
                         <img src={prophetic} alt="prophetic" style={{height: 120}} /> <br />
                         <span><Button type="primary"  style={{marginTop: 13}}>BUY NOW</Button></span>
                       </Col>
                    </Row>
                  </Col>
                  <Col span={8} className="contact">
                    <h4>CONTACT US</h4>
                    <ContactUs />
                  </Col>
               </Row>
               {/* <Divider style={{width: '100%'}}/>
               <Row >
                 <Col span={12}></Col>
                 <Col span={12}></Col> #2B3C4D
               </Row> */}
             </Content>
          </Footer>
          <Footer style={{ textAlign: 'center', height: '100%', background: '#000000', color: 'white' }} className="last-footer">
            <Row>
              <Col span={12} className="footer-text">
                <p>© 2018 Paul Hagiazo. All Rights Reserved. jidemobell</p>
              </Col>
              <Col span={12}>
                <p>
                  <span className="footer-icon">
                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                  </span>
                  <span className="footer-icon">
                    <FontAwesomeIcon icon={['fab', 'twitter-square']} />
                  </span>
                  <span className="footer-icon">
                    <FontAwesomeIcon icon={['fab', 'youtube']} />
                  </span>
                </p>
              </Col>
            </Row>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
