// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// business info
import businessInfo from './config/businessInfo';
import root from './config/root';
import importFont from './config/importFont';
// nodemailer
import request from './nodemailer/request';
import customer from './nodemailer/customer';
// Pages
import home from './pages/home';
import about from './pages/about';
import service from './pages/service';
import contact from './pages/contact';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    request,
    customer,
    about,
    home,
    service,
    contact,
    businessInfo,
    root,
    importFont
  ]),
})
