// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import user from './admin/user';
import customer from './admin/customer';
import permission from './admin/permission';
import about from './web/pages/about';
import home from './web/pages/home';
import service from './web/pages/service';
import contact from './web/pages/contact';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    user,
    customer,
    permission,
    about,
    home,
    service,
    contact
  ]),
})
