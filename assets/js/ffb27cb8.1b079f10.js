/*! For license information please see ffb27cb8.1b079f10.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[512974],{270595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(824246),a=n(511151);const o={id:"org",title:"LDAP Organizational Data",sidebar_label:"Org Data",description:"Setting up ingestion of organizational data from LDAP"},s=void 0,i={id:"integrations/ldap/org",title:"LDAP Organizational Data",description:"Setting up ingestion of organizational data from LDAP",source:"@site/../docs/integrations/ldap/org.md",sourceDirName:"integrations/ldap",slug:"/integrations/ldap/org",permalink:"/docs/integrations/ldap/org",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/ldap/org.md",tags:[],version:"current",frontMatter:{id:"org",title:"LDAP Organizational Data",sidebar_label:"Org Data",description:"Setting up ingestion of organizational data from LDAP"},sidebar:"docs",previous:{title:"Locations",permalink:"/docs/integrations/google-cloud-storage/locations"},next:{title:"Intro to plugins",permalink:"/docs/plugins/"}},l={},u=[{value:"Supported vendors",id:"supported-vendors",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"target",id:"target",level:3},{value:"target.tls.keys",id:"targettlskeys",level:4},{value:"target.tls.certs",id:"targettlscerts",level:4},{value:"bind",id:"bind",level:3},{value:"users",id:"users",level:3},{value:"users.dn",id:"usersdn",level:4},{value:"users.options",id:"usersoptions",level:4},{value:"users.set",id:"usersset",level:4},{value:"users.map",id:"usersmap",level:4},{value:"groups",id:"groups",level:3},{value:"groups.dn",id:"groupsdn",level:4},{value:"groups.options",id:"groupsoptions",level:4},{value:"groups.set",id:"groupsset",level:4},{value:"groups.map",id:"groupsmap",level:4},{value:"Customize the Provider",id:"customize-the-provider",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The Backstage catalog can be set up to ingest organizational data - users and\ngroups - directly from an LDAP compatible service. The result is a hierarchy of\n",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-user",children:(0,r.jsx)(t.code,{children:"User"})})," and\n",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-group",children:(0,r.jsx)(t.code,{children:"Group"})})," kind\nentities that mirror your org setup."]}),"\n",(0,r.jsx)(t.h2,{id:"supported-vendors",children:"Supported vendors"}),"\n",(0,r.jsxs)(t.p,{children:["Backstage in general supports OpenLDAP compatible vendors, as well as Active Directory and FreeIPA. If you are using a vendor that does not seem to be supported, please ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/new?assignees=&labels=enhancement&template=feature_template.md",children:"file an issue"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(t.p,{children:["The provider is not installed by default, therefore you have to add a dependency\nto ",(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-ldap"})," to your backend package."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# From your Backstage root directory\nyarn --cwd packages/backend add @backstage/plugin-catalog-backend-module-ldap\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Next add the basic configuration to ",(0,r.jsx)(t.code,{children:"app-config.yaml"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title="app-config.yaml"',children:"catalog:\n  providers:\n    ldapOrg:\n      default:\n        target: ldaps://ds.example.net\n        bind:\n          dn: uid=ldap-reader-user,ou=people,ou=example,dc=example,dc=net\n          secret: ${LDAP_SECRET}\n        schedule:\n          frequency: PT1H\n          timeout: PT15M\n"})}),"\n",(0,r.jsx)(t.p,{children:"Finally, updated your backend by adding the following line:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"backend.add(import('@backstage/plugin-catalog-backend/alpha'));\n/* highlight-add-start */\nbackend.add(import('@backstage/plugin-catalog-backend-module-ldap'));\n/* highlight-add-end */\n"})}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(t.p,{children:"The following configuration is a small example of how a setup could look for\nimporting groups and users from a corporate LDAP server."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"catalog:\n  providers:\n    ldapOrg:\n      default:\n        target: ldaps://ds.example.net\n        bind:\n          dn: uid=ldap-reader-user,ou=people,ou=example,dc=example,dc=net\n          secret: ${LDAP_SECRET}\n        users:\n          dn: ou=people,ou=example,dc=example,dc=net\n          options:\n            filter: (uid=*)\n          map:\n            description: l\n          set:\n            metadata.customField: 'hello'\n        groups:\n          dn: ou=access,ou=groups,ou=example,dc=example,dc=net\n          options:\n            filter: (&(objectClass=some-group-class)(!(groupType=email)))\n          map:\n            description: l\n          set:\n            metadata.customField: 'hello'\n"})}),"\n",(0,r.jsx)(t.p,{children:'These config blocks have a lot of options in them, so we will describe each\n"root" key within the block separately.'}),"\n",(0,r.jsx)(t.h3,{id:"target",children:"target"}),"\n",(0,r.jsxs)(t.p,{children:["This is the URL of the targeted server, typically on the form\n",(0,r.jsx)(t.code,{children:"ldaps://ds.example.net"})," for SSL enabled servers or ",(0,r.jsx)(t.code,{children:"ldap://ds.example.net"}),"\nwithout SSL."]}),"\n",(0,r.jsx)(t.h4,{id:"targettlskeys",children:"target.tls.keys"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"keys"})," in TLS options specifies location of a file, that contains private keys\nto establish connection with your LDAP server, in PEM format. See an example\nfor Google Secure LDAP Service below."]}),"\n",(0,r.jsx)(t.h4,{id:"targettlscerts",children:"target.tls.certs"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"certs"})," in TLS options specifies location of a file, that contains certificate\nchains to establish connection with your LDAP server, in PEM format. See an\nexample for Google Secure LDAP Service below."]}),"\n",(0,r.jsx)(t.h3,{id:"bind",children:"bind"}),"\n",(0,r.jsx)(t.p,{children:"The bind block specifies how the plugin should bind (essentially, to\nauthenticate) towards the server. It has the following fields."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"dn: uid=ldap-reader-user,ou=people,ou=example,dc=example,dc=net\nsecret: ${LDAP_SECRET}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"dn"})," is the full LDAP Distinguished Name for the user that the plugin\nauthenticates itself as. At this point, only regular user based authentication\nis supported."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"secret"})," is the password of the same user. In this example, it is given in\nthe form of an environment variable ",(0,r.jsx)(t.code,{children:"LDAP_SECRET"}),", that has to be set when the\nbackend starts."]}),"\n",(0,r.jsx)(t.h3,{id:"users",children:"users"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"users"})," block defines the settings that govern the reading and\ninterpretation of users. Its fields are explained in separate sections below."]}),"\n",(0,r.jsx)(t.h4,{id:"usersdn",children:"users.dn"}),"\n",(0,r.jsxs)(t.p,{children:["The DN under which users are stored, e.g.\n",(0,r.jsx)(t.code,{children:"ou=people,ou=example,dc=example,dc=net"}),"."]}),"\n",(0,r.jsx)(t.h4,{id:"usersoptions",children:"users.options"}),"\n",(0,r.jsx)(t.p,{children:"The search options to use when sending the query to the server, when reading all\nusers. All the options are shown below, with their default values, but they are\nall optional."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"options:\n  # One of 'base', 'one', or 'sub'.\n  scope: one\n  # The filter is the one that you commonly will want to specify explicitly. It\n  # is a string on the standard LDAP query format. Use it to select out the set\n  # of users that are of actual interest to ingest. For example, you may want\n  # to filter out disabled users.\n  filter: (uid=*)\n  # The attribute selectors for each item, as passed to the LDAP server.\n  attributes: ['*', '+']\n  # This field is either 'false' to disable paging when reading from the\n  # server, or an object on the form '{ pageSize: 100, pagePause: true }' that\n  # specifies the details of how the paging shall work.\n  paged: false\n"})}),"\n",(0,r.jsx)(t.h4,{id:"usersset",children:"users.set"}),"\n",(0,r.jsx)(t.p,{children:"This optional piece lets you specify a number of JSON paths (on a.b.c form) and\nhard coded values to set on those paths. This can be useful for example if you\nwant to hard code a namespace or similar on the generated entities."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"set:\n  # Just an example; the key and value can be anything\n  metadata.namespace: 'ldap'\n"})}),"\n",(0,r.jsx)(t.h4,{id:"usersmap",children:"users.map"}),"\n",(0,r.jsx)(t.p,{children:"Mappings from well known entity fields, to LDAP attribute names. This is where\nyou are able to define how to interpret the attributes of each LDAP result item,\nand to move them into the corresponding entity fields. All the options are shown\nbelow, with their default values, but they are all optional."}),"\n",(0,r.jsxs)(t.p,{children:["If you leave out an optional mapping, it will still be copied using that default\nvalue. For example, even if you do not put in the field ",(0,r.jsx)(t.code,{children:"displayName"})," in your\nconfig, the provider will still copy the attribute ",(0,r.jsx)(t.code,{children:"cn"})," into the entity field\n",(0,r.jsx)(t.code,{children:"spec.profile.displayName"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"map:\n  # The name of the attribute that holds the relative\n  # distinguished name of each entry.\n  rdn: uid\n  # The name of the attribute that shall be used for the value of\n  # the metadata.name field of the entity.\n  name: uid\n  # The name of the attribute that shall be used for the value of\n  # the metadata.description field of the entity.\n  description: description\n  # The name of the attribute that shall be used for the value of\n  # the spec.profile.displayName field of the entity.\n  displayName: cn\n  # The name of the attribute that shall be used for the value of\n  # the spec.profile.email field of the entity.\n  email: mail\n  # The name of the attribute that shall be used for the value of\n  # the spec.profile.picture field of the entity.\n  picture: <nothing, left out>\n  # The name of the attribute that shall be used for the values of\n  # the spec.memberOf field of the entity.\n  memberOf: memberOf\n"})}),"\n",(0,r.jsx)(t.h3,{id:"groups",children:"groups"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"groups"})," block defines the settings that govern the reading and\ninterpretation of groups. Its fields are explained in separate sections below."]}),"\n",(0,r.jsx)(t.h4,{id:"groupsdn",children:"groups.dn"}),"\n",(0,r.jsxs)(t.p,{children:["The DN under which groups are stored, e.g.\n",(0,r.jsx)(t.code,{children:"ou=people,ou=example,dc=example,dc=net"}),"."]}),"\n",(0,r.jsx)(t.h4,{id:"groupsoptions",children:"groups.options"}),"\n",(0,r.jsx)(t.p,{children:"The search options to use when sending the query to the server, when reading all\ngroups. All the options are shown below, with their default values, but they are\nall optional."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"options:\n  # One of 'base', 'one', or 'sub'.\n  scope: one\n  # The filter is the one that you commonly will want to specify explicitly. It\n  # is a string on the standard LDAP query format. Use it to select out the set\n  # of groups that are of actual interest to ingest. For example, you may want\n  # to filter out disabled groups.\n  filter: (&(objectClass=some-group-class)(!(groupType=email)))\n  # The attribute selectors for each item, as passed to the LDAP server.\n  attributes: ['*', '+']\n  # This field is either 'false' to disable paging when reading from the\n  # server, or an object on the form '{ pageSize: 100, pagePause: true }' that\n  # specifies the details of how the paging shall work.\n  paged: false\n"})}),"\n",(0,r.jsx)(t.h4,{id:"groupsset",children:"groups.set"}),"\n",(0,r.jsx)(t.p,{children:"This optional piece lets you specify a number of JSON paths (on a.b.c form) and\nhard coded values to set on those paths. This can be useful for example if you\nwant to hard code a namespace or similar on the generated entities."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"set:\n  # Just an example; the key and value can be anything\n  metadata.namespace: 'ldap'\n"})}),"\n",(0,r.jsx)(t.h4,{id:"groupsmap",children:"groups.map"}),"\n",(0,r.jsx)(t.p,{children:"Mappings from well known entity fields, to LDAP attribute names. This is where\nyou are able to define how to interpret the attributes of each LDAP result item,\nand to move them into the corresponding entity fields. All of the options are\nshown below, with their default values, but they are all optional."}),"\n",(0,r.jsxs)(t.p,{children:["If you leave out an optional mapping, it will still be copied using that default\nvalue. For example, even if you do not put in the field ",(0,r.jsx)(t.code,{children:"displayName"})," in your\nconfig, the provider will still copy the attribute ",(0,r.jsx)(t.code,{children:"cn"})," into the entity field\n",(0,r.jsx)(t.code,{children:"spec.profile.displayName"}),". If the target field is optional, such as the display\nname, the importer will accept missing attributes and just leave the target\nfield unset. If the target field is mandatory, such as the name of the entity,\nvalidation will fail if the source attribute is missing."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"map:\n  # The name of the attribute that holds the relative\n  # distinguished name of each entry. This value is copied into a\n  # well known annotation to be able to query by it later.\n  rdn: cn\n  # The name of the attribute that shall be used for the value of\n  # the metadata.name field of the entity.\n  name: cn\n  # The name of the attribute that shall be used for the value of\n  # the metadata.description field of the entity.\n  description: description\n  # The name of the attribute that shall be used for the value of\n  # the spec.type field of the entity.\n  type: groupType\n  # The name of the attribute that shall be used for the value of\n  # the spec.profile.displayName field of the entity.\n  displayName: cn\n  # The name of the attribute that shall be used for the value of\n  # the spec.profile.email field of the entity.\n  email: <nothing, left out>\n  # The name of the attribute that shall be used for the value of\n  # the spec.profile.picture field of the entity.\n  picture: <nothing, left out>\n  # The name of the attribute that shall be used for the values of\n  # the spec.parent field of the entity.\n  memberOf: memberOf\n  # The name of the attribute that shall be used for the values of\n  # the spec.children field of the entity.\n  members: member\n"})}),"\n",(0,r.jsx)(t.h2,{id:"customize-the-provider",children:"Customize the Provider"}),"\n",(0,r.jsx)(t.p,{children:"In case you want to customize the ingested entities, the provider allows to pass\ntransformers for users and groups."}),"\n",(0,r.jsxs)(t.p,{children:["Transformers can be configured by extending ",(0,r.jsx)(t.code,{children:"ldapOrgEntityProviderTransformExtensionPoint"}),". Here is an example:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"import { createBackendModule } from '@backstage/backend-plugin-api';\nimport { ldapOrgEntityProviderTransformExtensionPoint } from '@backstage/plugin-catalog-backend-module-ldap';\nimport { myUserTransformer, myGroupTransformer } from './transformers';\n\nbackend.add(\n  createBackendModule({\n    pluginId: 'catalog',\n    moduleId: 'ldap-extensions',\n    register(env) {\n      env.registerInit({\n        deps: {\n          /* highlight-add-start */\n          ldapTransformers: ldapOrgEntityProviderTransformExtensionPoint,\n          /* highlight-add-end */\n        },\n        async init({ ldapTransformers }) {\n          /* highlight-add-start */\n          ldapTransformers.setUserTransformer(myUserTransformer);\n          ldapTransformers.setGroupTransformer(myGroupTransformer);\n          /* highlight-add-end */\n        },\n      });\n    },\n  }),\n);\n"})})]})}function c(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},371426:(e,t,n)=>{var r=n(827378),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,d=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:d,props:o,_owner:i.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),c=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var x=v.prototype=new b;x.constructor=v,m(x,y.prototype),x.isPureReactComponent=!0;var j=Array.isArray,w=Object.prototype.hasOwnProperty,k={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var a,o={},s=null,i=null;if(null!=t)for(a in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,a)&&!T.hasOwnProperty(a)&&(o[a]=t[a]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];o.children=u}if(e&&e.defaultProps)for(a in l=e.defaultProps)void 0===o[a]&&(o[a]=l[a]);return{$$typeof:n,type:e,key:s,ref:i,props:o,_owner:k.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function D(e,t,a,o,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return s=s(l=e),e=""===o?"."+E(l,0):o,j(s)?(a="",null!=e&&(a=e.replace(P,"$&/")+"/"),D(s,t,a,"",(function(e){return e}))):null!=s&&(S(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,a+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(P,"$&/")+"/")+e)),t.push(s)),1;if(l=0,o=""===o?".":o+":",j(e))for(var u=0;u<e.length;u++){var d=o+E(i=e[u],u);l+=D(i,t,a,d,s)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),u=0;!(i=e.next()).done;)l+=D(i=i.value,t,a,d=o+E(i,u++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function O(e,t,n){if(null==e)return e;var r=[],a=0;return D(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function A(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var L={current:null},C={transition:null},N={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:C,ReactCurrentOwner:k};t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=a,t.Profiler=s,t.PureComponent=v,t.StrictMode=o,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=m({},e.props),o=e.key,s=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,i=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)w.call(t,u)&&!T.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];a.children=l}return{$$typeof:n,type:e.type,key:o,ref:s,props:a,_owner:i}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:A}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=C.transition;C.transition={};try{e()}finally{C.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return L.current.useCallback(e,t)},t.useContext=function(e){return L.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return L.current.useDeferredValue(e)},t.useEffect=function(e,t){return L.current.useEffect(e,t)},t.useId=function(){return L.current.useId()},t.useImperativeHandle=function(e,t,n){return L.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return L.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return L.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return L.current.useMemo(e,t)},t.useReducer=function(e,t,n){return L.current.useReducer(e,t,n)},t.useRef=function(e){return L.current.useRef(e)},t.useState=function(e){return L.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return L.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return L.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(667294);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);