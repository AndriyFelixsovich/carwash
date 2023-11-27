(()=>{"use strict";var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var r in a)e.o(a,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.element,a=window.wp.plugins,r=window.wp.editSite,n=window.wp.i18n,l=window.wp.apiFetch;var o=e.n(l);async function c(e){const t=await e.blob(),a=e.headers.get("Content-Disposition").split("filename=")[1];if(navigator.msSaveBlob||navigator.saveBlob)(navigator.msSaveBlob||navigator.saveBlob).call(navigator,t,a);else{const e=URL.createObjectURL(t),r=document.createElement("a");r.href=e,r.download=a,document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout((()=>{URL.revokeObjectURL(e)}),100)}}const m=window.wp.data,h=window.wp.notices,i=window.wp.components,s=window.wp.primitives,_=(0,t.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(s.Path,{d:"M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z"})),u=()=>{const{createErrorNotice:e}=(0,m.useDispatch)(h.store),[a,r]=(0,t.useState)({name:"",description:"",uri:"",version:"",author:"",author_uri:"",tags_custom:"",recommended_plugins:""});return(0,t.useEffect)((()=>{(async()=>{const e=await(async()=>o()({path:"/create-block-theme/v1/get-readme-data",method:"GET"}).then((e=>"SUCCESS"===e.status?e.data:{})))();r((t=>({...t,recommended_plugins:e.recommendedPlugins})))})()}),[]),(0,m.useSelect)((async e=>{const t=e("core").getCurrentTheme();r({name:t.name.raw,description:t.description.raw,uri:t.theme_uri.raw,version:t.version,author:t.author.raw,author_uri:t.author_uri.raw,tags_custom:t.tags.rendered,subfolder:t.stylesheet.lastIndexOf("/")>1?t.stylesheet.substring(0,t.stylesheet.lastIndexOf("/")):""})}),[]),(0,t.createElement)(i.PanelBody,null,(0,t.createElement)(i.__experimentalHeading,null,(0,t.createElement)(i.__experimentalNavigatorToParentButton,{icon:_},(0,n.__)("Theme Info","create-block-theme"))),(0,t.createElement)(i.__experimentalVStack,null,(0,t.createElement)(i.__experimentalText,null,(0,n.__)("Edit Metadata properties of the current theme.","create-block-theme")),(0,t.createElement)(i.__experimentalSpacer,null),(0,t.createElement)(i.TextControl,{disabled:!0,label:(0,n.__)("Theme name","create-block-theme"),value:a.name}),(0,t.createElement)(i.TextareaControl,{label:(0,n.__)("Theme description","create-block-theme"),value:a.description,onChange:e=>r({...a,description:e}),placeholder:(0,n.__)("A short description of the theme","create-block-theme")}),(0,t.createElement)(i.TextControl,{label:(0,n.__)("Theme URI","create-block-theme"),value:a.uri,onChange:e=>r({...a,uri:e}),placeholder:(0,n.__)("https://github.com/wordpress/twentytwentythree/","create-block-theme")}),(0,t.createElement)(i.TextControl,{label:(0,n.__)("Author","create-block-theme"),value:a.author,onChange:e=>r({...a,author:e}),placeholder:(0,n.__)("the WordPress team","create-block-theme")}),(0,t.createElement)(i.TextControl,{label:(0,n.__)("Author URI","create-block-theme"),value:a.author_uri,onChange:e=>r({...a,author_uri:e}),placeholder:(0,n.__)("https://wordpress.org/","create-block-theme")}),(0,t.createElement)(i.TextControl,{label:(0,n.__)("Version","create-block-theme"),value:a.version,onChange:e=>r({...a,version:e}),placeholder:(0,n.__)("Version of the theme","create-block-theme")}),(0,t.createElement)(i.TextareaControl,{label:(0,n.__)("Theme tags","create-block-theme"),value:a.tags_custom,onChange:e=>r({...a,tags_custom:e}),placeholder:(0,n.__)("A comma-separated collection of tags","create-block-theme")}),(0,t.createElement)(i.TextareaControl,{label:(0,n.__)("Recommended Plugins","create-block-theme"),help:(0,t.createElement)(t.Fragment,null,(0,n.__)("List the recommended plugins for this theme. e.g. contact forms, social media. Plugins must be from the WordPress.org plugin repository."),(0,t.createElement)("br",null),(0,t.createElement)(i.ExternalLink,{href:"https://make.wordpress.org/themes/handbook/review/required/#6-plugins"},(0,n.__)("Read more.","create-block-theme"))),placeholder:(0,n.__)("Plugin Name\nhttps://wordpress.org/plugins/plugin-name/\nPlugin Description"),value:a.recommended_plugins,onChange:e=>r({...a,recommended_plugins:e})}),(0,t.createElement)(i.TextControl,{label:(0,n.__)("Theme Subfolder","create-block-theme"),value:a.subfolder,onChange:e=>r({...a,subfolder:e})})),(0,t.createElement)(i.__experimentalSpacer,null),(0,t.createElement)(i.Button,{variant:"secondary",onClick:()=>{o()({path:"/create-block-theme/v1/update",method:"POST",data:a,headers:{"Content-Type":"application/json"}}).then((()=>{alert((0,n.__)("Theme updated successfully. The editor will now reload.","create-block-theme")),window.location.reload()})).catch((t=>{const a=t.message||(0,n.__)("An error occurred while attempting to update the theme.","create-block-theme");e(a,{type:"snackbar"})}))}},(0,n.__)("Update","create-block-theme")))},p=(0,t.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(s.Path,{d:"M20.2 8v11c0 .7-.6 1.2-1.2 1.2H6v1.5h13c1.5 0 2.7-1.2 2.7-2.8V8zM18 16.4V4.6c0-.9-.7-1.6-1.6-1.6H4.6C3.7 3 3 3.7 3 4.6v11.8c0 .9.7 1.6 1.6 1.6h11.8c.9 0 1.6-.7 1.6-1.6zm-13.5 0V4.6c0-.1.1-.1.1-.1h11.8c.1 0 .1.1.1.1v11.8c0 .1-.1.1-.1.1H4.6l-.1-.1z"})),d=(0,t.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(s.Path,{d:"M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"})),b=(0,t.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(s.Path,{d:"M18.5 5.5V8H20V5.5h2.5V4H20V1.5h-1.5V4H16v1.5h2.5zM12 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-6h-1.5v6a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5h6V4z"})),w=()=>{const{createErrorNotice:e}=(0,m.useDispatch)(h.store),[a,r]=(0,t.useState)({name:"",description:"",uri:"",author:"",author_uri:"",tags_custom:""});return(0,m.useSelect)((e=>{const t=e("core").getCurrentTheme();r({name:t.name.raw,description:t.description.raw,uri:t.theme_uri.raw,author:t.author.raw,author_uri:t.author_uri.raw,subfolder:t.stylesheet.lastIndexOf("/")>1?t.stylesheet.substring(0,t.stylesheet.lastIndexOf("/")):""})}),[]),(0,t.createElement)(i.PanelBody,null,(0,t.createElement)(i.__experimentalHeading,null,(0,t.createElement)(i.__experimentalNavigatorToParentButton,{icon:_},(0,n.__)("Create Theme","create-block-theme"))),(0,t.createElement)(i.__experimentalVStack,null,(0,t.createElement)(i.__experimentalText,null,(0,n.__)("Enter Metadata properties of the new theme.","create-block-theme")),(0,t.createElement)(i.__experimentalSpacer,null),(0,t.createElement)(i.TextControl,{label:(0,n.__)("Theme name","create-block-theme"),value:a.name,onChange:e=>r({...a,name:e})}),(0,t.createElement)(i.TextareaControl,{label:(0,n.__)("Theme description","create-block-theme"),value:a.description,onChange:e=>r({...a,description:e}),placeholder:(0,n.__)("A short description of the theme","create-block-theme")}),(0,t.createElement)(i.TextControl,{label:(0,n.__)("Theme URI","create-block-theme"),value:a.uri,onChange:e=>r({...a,uri:e}),placeholder:(0,n.__)("https://github.com/wordpress/twentytwentythree/","create-block-theme")}),(0,t.createElement)(i.TextControl,{label:(0,n.__)("Author","create-block-theme"),value:a.author,onChange:e=>r({...a,author:e}),placeholder:(0,n.__)("the WordPress team","create-block-theme")}),(0,t.createElement)(i.TextControl,{label:(0,n.__)("Author URI","create-block-theme"),value:a.author_uri,onChange:e=>r({...a,author_uri:e}),placeholder:(0,n.__)("https://wordpress.org/","create-block-theme")}),(0,t.createElement)(i.TextControl,{label:(0,n.__)("Theme Subfolder","create-block-theme"),value:a.subfolder,onChange:e=>r({...a,subfolder:e})})),(0,t.createElement)(i.__experimentalSpacer,null),(0,t.createElement)("hr",null),(0,t.createElement)(i.__experimentalSpacer,null),(0,t.createElement)(i.Button,{icon:p,variant:"secondary",onClick:()=>{o()({path:"/create-block-theme/v1/clone",method:"POST",data:a,headers:{"Content-Type":"application/json"}}).then((()=>{alert((0,n.__)("Theme cloned successfully. The editor will now reload.","create-block-theme")),window.location.reload()})).catch((t=>{const a=t.message||(0,n.__)("An error occurred while attempting to create the theme.","create-block-theme");e(a,{type:"snackbar"})}))}},(0,n.__)("Clone Theme","create-block-theme")),(0,t.createElement)(i.__experimentalSpacer,null),(0,t.createElement)(i.__experimentalText,{variant:"muted"},(0,n.__)("Create a copy of this theme on the server and activate it. The user changes will be preserved in the new theme.","create-block-theme")),(0,t.createElement)("hr",null),(0,t.createElement)(i.__experimentalSpacer,null),(0,t.createElement)(i.Button,{icon:d,variant:"secondary",onClick:()=>{const t={path:"/create-block-theme/v1/export-clone",method:"POST",data:a,headers:{"Content-Type":"application/json"},parse:!1};!async function(){try{c(await o()(t))}catch(t){const a=t.message&&"unknown_error"!==t.code?t.message:(0,n.__)("An error occurred while attempting to export the theme.");e(a,{type:"snackbar"})}}()}},(0,n.__)("Export Theme","create-block-theme")),(0,t.createElement)(i.__experimentalSpacer,null),(0,t.createElement)(i.__experimentalText,{variant:"muted"},(0,n.__)("Export a copy of this theme as a .zip file. The user changes will be preserved in the new theme.","create-block-theme")),(0,t.createElement)("hr",null),(0,t.createElement)(i.__experimentalSpacer,null),(0,t.createElement)(i.Button,{icon:b,variant:"secondary",onClick:()=>{o()({path:"/create-block-theme/v1/create-blank",method:"POST",data:a,headers:{"Content-Type":"application/json"}}).then((()=>{alert((0,n.__)("Theme created successfully. The editor will now reload.","create-block-theme")),window.location.reload()})).catch((t=>{const a=t.message||(0,n.__)("An error occurred while attempting to create the theme.","create-block-theme");e(a,{type:"snackbar"})}))}},(0,n.__)("Create Blank Theme","create-block-theme")),(0,t.createElement)(i.__experimentalSpacer,null),(0,t.createElement)(i.__experimentalText,{variant:"muted"},(0,n.__)("Create a blank theme with no styles or templates.","create-block-theme")),(0,t.createElement)(i.__experimentalSpacer,null))},g=(0,t.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(s.Path,{d:"M14.103 7.128l2.26-2.26a4 4 0 00-5.207 4.804L5.828 15a2 2 0 102.828 2.828l5.329-5.328a4 4 0 004.804-5.208l-2.261 2.26-1.912-.512-.513-1.912zm-7.214 9.64a.5.5 0 11.707-.707.5.5 0 01-.707.707z"})),v=(0,t.createElement)(s.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(s.Path,{d:"M19 6.2h-5.9l-.6-1.1c-.3-.7-1-1.1-1.8-1.1H5c-1.1 0-2 .9-2 2v11.8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8.2c0-1.1-.9-2-2-2zm.5 11.6c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h5.8c.2 0 .4.1.4.3l1 2H19c.3 0 .5.2.5.5v9.5zM8 12.8h8v-1.5H8v1.5zm0 3h8v-1.5H8v1.5z"})),E=(0,t.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(s.Path,{d:"m19 7-3-3-8.5 8.5-1 4 4-1L19 7Zm-7 11.5H5V20h7v-1.5Z"})),x=(0,t.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(s.Path,{d:"M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"}));(0,a.registerPlugin)("cbt-plugin-sidebar",{render:()=>{const{createErrorNotice:e}=(0,m.useDispatch)(h.store);return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.PluginSidebarMoreMenuItem,{target:"create-block-theme-sidebar",icon:g},(0,n._x)("Create Block Theme","UI String","create-block-theme")),(0,t.createElement)(r.PluginSidebar,{name:"create-block-theme-sidebar",icon:g,title:(0,n._x)("Create Block Theme","UI String","create-block-theme")},(0,t.createElement)(i.__experimentalNavigatorProvider,{initialPath:"/"},(0,t.createElement)(i.__experimentalNavigatorScreen,{path:"/"},(0,t.createElement)(i.PanelBody,null,(0,t.createElement)(i.__experimentalVStack,null,(0,t.createElement)(i.Button,{icon:v,onClick:()=>{o()({path:"/create-block-theme/v1/save",method:"POST",headers:{"Content-Type":"application/json"}}).then((()=>{alert((0,n.__)("Theme saved successfully. The editor will now reload.","create-block-theme")),window.location.reload()})).catch((t=>{const a=t.message||(0,n.__)("An error occurred while attempting to save the theme.","create-block-theme");e(a,{type:"snackbar"})}))}},(0,n.__)("Save Changes","create-block-theme")),(0,t.createElement)(i.__experimentalText,{variant:"muted"},(0,n.__)("Save user changes (including Templates and Global Styles) to the theme.","create-block-theme")),(0,t.createElement)("hr",null),(0,t.createElement)(i.Button,{icon:d,onClick:()=>{const t={path:"/create-block-theme/v1/export",method:"POST",headers:{"Content-Type":"application/json"},parse:!1};!async function(){try{c(await o()(t))}catch(t){const a=t.message&&"unknown_error"!==t.code?t.message:(0,n.__)("An error occurred while attempting to export the theme.","create-block-theme");e(a,{type:"snackbar"})}}()}},(0,n.__)("Export Zip","create-block-theme")),(0,t.createElement)(i.__experimentalText,{variant:"muted"},(0,n.__)("Export your theme as a zip file. Note: You may want to save your user changes to the theme first.","create-block-theme")),(0,t.createElement)("hr",null),(0,t.createElement)(i.__experimentalNavigatorButton,{path:"/update",icon:E},(0,t.createElement)(i.__experimentalSpacer,null),(0,t.createElement)(i.__experimentalHStack,{justify:"space-between"},(0,t.createElement)(i.FlexItem,null,(0,n.__)("Theme Info","create-block-theme")),(0,t.createElement)(i.Icon,{icon:x}))),(0,t.createElement)(i.__experimentalText,{variant:"muted"},(0,n.__)("Edit Metadata properties of your current theme.","create-block-theme")),(0,t.createElement)("hr",null),(0,t.createElement)(i.__experimentalNavigatorButton,{path:"/create",icon:p},(0,t.createElement)(i.__experimentalSpacer,null),(0,t.createElement)(i.__experimentalHStack,null,(0,t.createElement)(i.FlexItem,null,(0,n.__)("Create Theme","create-block-theme")),(0,t.createElement)(i.Icon,{icon:x}))),(0,t.createElement)(i.__experimentalText,{variant:"muted"},(0,n.__)("Create a new theme based on your current theme and either save it or export it.","create-block-theme"))))),(0,t.createElement)(i.__experimentalNavigatorScreen,{path:"/update"},(0,t.createElement)(u,null)),(0,t.createElement)(i.__experimentalNavigatorScreen,{path:"/create"},(0,t.createElement)(w,null)))))}})})();