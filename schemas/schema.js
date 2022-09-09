// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// business info
import businessInfo from './config/businessInfo';

//components
import service from './components/service';
import estimate from './components/estimate';
import nav from './components/nav';
import footer from './components/footer';
import contactHeader from './components/contactHeader';
import testimonial from './components/testimonial';

// styles
import root from './styles/root';
import pageFont from './styles/pageFont';
import global from './styles/global';
import font from './styles/font';

// nodemailer
import request from './nodemailer/request';
import customer from './nodemailer/customer';

// Pages
import homePage from './pages/homePage';
import aboutPage from './pages/aboutPage';
import servicePage from './pages/servicePage';
import contactPage from './pages/contactPage';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    request,
    customer,
    aboutPage,
    homePage,
    servicePage,
    contactPage,
    service,
    businessInfo,
    root,
    pageFont,
    estimate,
    contactHeader,
    nav,
    footer,
    global,
    font,
    testimonial
  ]),
})
