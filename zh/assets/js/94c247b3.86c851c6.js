"use strict";(self.webpackChunk_1_block_ai=self.webpackChunk_1_block_ai||[]).push([[1110],{79540:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=s(85893),i=s(11151);const a={slug:"introducing-llmos",title:"Introducing LLMOS",tags:["1Block.AI","AI Infrastructure"],authors:["guangbo"],date:new Date("2024-10-17T00:00:00.000Z"),hide_table_of_contents:!1},o=void 0,l={permalink:"/zh/blog/introducing-llmos",editUrl:"https://github.com/oneblock-ai/1block.ai/tree/main/blog/introduce-llmos-0.1.0.mdx",source:"@site/blog/introduce-llmos-0.1.0.mdx",title:"Introducing LLMOS",description:"An Open-source Cloud-native AI Infrastructure Platform, Not Just GPUs",date:"2024-10-17T00:00:00.000Z",tags:[{inline:!0,label:"1Block.AI",permalink:"/zh/blog/tags/1-block-ai"},{inline:!0,label:"AI Infrastructure",permalink:"/zh/blog/tags/ai-infrastructure"}],readingTime:4.5,hasTruncateMarker:!1,authors:[{name:"Guangbo Chen",title:"Founder of 1BLOCK.AI",url:"https://github.com/guangbochen",email:"guangbo@1block.ai",socials:{github:"https://github.com/guangbochen",linkedin:"https://www.linkedin.com/in/guangbo/"},imageURL:"https://github.com/guangbochen.png",key:"guangbo",page:null}],frontMatter:{slug:"introducing-llmos",title:"Introducing LLMOS",tags:["1Block.AI","AI Infrastructure"],authors:["guangbo"],date:"2024-10-17T00:00:00.000Z",hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"LLMOS v0.2 - Simplify AI Management, Unlock GPU Potential",permalink:"/zh/blog/introducing-llmos-v02"},nextItem:{title:"Hello World @1Block.AI",permalink:"/zh/blog/welcome"}},r={authorsImageUrls:[void 0]},d=[{value:"An Open-source Cloud-native AI Infrastructure Platform, Not Just GPUs",id:"an-open-source-cloud-native-ai-infrastructure-platform-not-just-gpus",level:2},{value:"What is LLMOS?",id:"what-is-llmos",level:2},{value:"Why We Built LLMOS",id:"why-we-built-llmos",level:2},{value:"Key Features of LLMOS",id:"key-features-of-llmos",level:2},{value:"1. Seamless Notebook Integration",id:"1-seamless-notebook-integration",level:3},{value:"2. ModelService for LLM Deployment",id:"2-modelservice-for-llm-deployment",level:3},{value:"3. Machine Learning Cluster",id:"3-machine-learning-cluster",level:3},{value:"4. Scalable Storage with Rook Ceph",id:"4-scalable-storage-with-rook-ceph",level:3},{value:"5. Extensibility with Managed Addons",id:"5-extensibility-with-managed-addons",level:3},{value:"6. Simplified User and API Key Management",id:"6-simplified-user-and-api-key-management",level:3},{value:"7. Role-Based Access Control (RBAC) and Role Templates",id:"7-role-based-access-control-rbac-and-role-templates",level:3},{value:"8. Node Management",id:"8-node-management",level:3},{value:"9. Bootstrap and Installation Support",id:"9-bootstrap-and-installation-support",level:3},{value:"10. Easy Upgrades",id:"10-easy-upgrades",level:3},{value:"LLMOS Use Cases",id:"llmos-use-cases",level:2},{value:"Getting Started with LLMOS",id:"getting-started-with-llmos",level:2},{value:"Installation Script",id:"installation-script",level:5},{value:"Getting Started",id:"getting-started",level:5},{value:"More Examples",id:"more-examples",level:2},{value:"Join Us",id:"join-us",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"an-open-source-cloud-native-ai-infrastructure-platform-not-just-gpus",children:"An Open-source Cloud-native AI Infrastructure Platform, Not Just GPUs"}),"\n",(0,t.jsx)(n.h2,{id:"what-is-llmos",children:"What is LLMOS?"}),"\n",(0,t.jsxs)(n.p,{children:["We are thrilled to announce the launch of ",(0,t.jsx)(n.strong,{children:"LLMOS"}),", an open-source cloud-native AI infrastructure platform designed to simplify the management of AI applications and Large Language Models (LLMs). With LLMOS, organizations can effortlessly deploy, scale, and operate machine learning workflows while reducing the complexity often associated with AI development and operations."]}),"\n",(0,t.jsx)(n.h2,{id:"why-we-built-llmos",children:"Why We Built LLMOS"}),"\n",(0,t.jsxs)(n.p,{children:["AI and LLMs are transforming industries, but managing the infrastructure needed for AI at scale can be challenging. We built ",(0,t.jsx)(n.strong,{children:"LLMOS"})," to break down these barriers, providing a platform that makes it easier for developers, data scientists, and IT teams to focus on what really matters\u2014building and deploying powerful AI solutions. With its cloud-native foundation, LLMOS integrates smoothly with existing infrastructure, offering a flexible, scalable, and user-friendly way to manage AI projects and tasks."]}),"\n",(0,t.jsx)(n.h2,{id:"key-features-of-llmos",children:"Key Features of LLMOS"}),"\n",(0,t.jsx)(n.h3,{id:"1-seamless-notebook-integration",children:"1. Seamless Notebook Integration"}),"\n",(0,t.jsxs)(n.p,{children:["LLMOS integrates with popular notebook environments such as ",(0,t.jsx)(n.strong,{children:"Jupyter"}),", ",(0,t.jsx)(n.strong,{children:"VSCode"}),", and ",(0,t.jsx)(n.strong,{children:"RStudio"}),", enabling data scientists and developers to work efficiently in familiar tools without complicated setup."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"jupyter-notebook",src:s(24493).Z+"",width:"2178",height:"1636"})}),"\n",(0,t.jsx)(n.h3,{id:"2-modelservice-for-llm-deployment",children:"2. ModelService for LLM Deployment"}),"\n",(0,t.jsxs)(n.p,{children:["Deploying LLMs is now simpler with ",(0,t.jsx)(n.strong,{children:"ModelService"}),", which provides ",(0,t.jsx)(n.strong,{children:"OpenAI-compatible APIs"})," for serving large language models. This feature makes it easy to deploy, scale, and use LLMs in real-world applications."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"model-service",src:s(54963).Z+"",width:"3012",height:"864"})}),"\n",(0,t.jsx)(n.h3,{id:"3-machine-learning-cluster",children:"3. Machine Learning Cluster"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Machine Learning Cluster"})," supports distributed computing, offering parallel processing and access to leading AI libraries. This feature enhances the performance of machine learning workflows, especially for large-scale models and datasets."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"machine-learning-cluster",src:s(28986).Z+"",width:"3838",height:"1860"})}),"\n",(0,t.jsx)(n.h3,{id:"4-scalable-storage-with-rook-ceph",children:"4. Scalable Storage with Rook Ceph"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Rook Ceph"})," provides distributed and fault-tolerant storage system for LLMOS, offering robust, scalable block and filesystem storage that adapts to the needs of AI and LLM applications."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"roo-ceph",src:s(56186).Z+"",width:"3188",height:"1752"})}),"\n",(0,t.jsx)(n.h3,{id:"5-extensibility-with-managed-addons",children:"5. Extensibility with Managed Addons"}),"\n",(0,t.jsxs)(n.p,{children:["LLMOS introduces ",(0,t.jsx)(n.strong,{children:"ManagedAddon"})," support, allowing users to extend the platform with system and custom add-ons. This gives organizations more flexibility to tailor the platform to their specific needs."]}),"\n",(0,t.jsx)(n.h3,{id:"6-simplified-user-and-api-key-management",children:"6. Simplified User and API Key Management"}),"\n",(0,t.jsxs)(n.p,{children:["The platform features an intuitive interface for managing ",(0,t.jsx)(n.strong,{children:"users"})," and ",(0,t.jsx)(n.strong,{children:"API keys"}),", making access control and resource allocation easier for administrators."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"api-keys",src:s(63997).Z+"",width:"3468",height:"1210"})}),"\n",(0,t.jsx)(n.h3,{id:"7-role-based-access-control-rbac-and-role-templates",children:"7. Role-Based Access Control (RBAC) and Role Templates"}),"\n",(0,t.jsxs)(n.p,{children:["LLMOS offers enhanced ",(0,t.jsx)(n.strong,{children:"Role Templates"})," and ",(0,t.jsx)(n.strong,{children:"RBAC"}),", helping administrators assign permissions and manage security across teams and projects with ease."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"role-templates",src:s(55432).Z+"",width:"3012",height:"946"})}),"\n",(0,t.jsx)(n.h3,{id:"8-node-management",children:"8. Node Management"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Node Management"})," is available directly through the LLMOS dashboard, allowing for better visibility and control over system resources, enhancing operational efficiency."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"nodes",src:s(90517).Z+"",width:"3114",height:"1054"}),"\n",(0,t.jsx)(n.img,{alt:"node-management",src:s(66435).Z+"",width:"3126",height:"1388"})]}),"\n",(0,t.jsx)(n.h3,{id:"9-bootstrap-and-installation-support",children:"9. Bootstrap and Installation Support"}),"\n",(0,t.jsxs)(n.p,{children:["Setting up LLMOS has been simplified through easy-to-use ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://llmos.1block.ai/docs/installation/",children:"installation script"})})," and comprehensive ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://llmos.1block.ai/docs/installation/configurations",children:"bootstrap configurations"})}),", making it easy for users to get up and running."]}),"\n",(0,t.jsx)(n.h3,{id:"10-easy-upgrades",children:"10. Easy Upgrades"}),"\n",(0,t.jsx)(n.p,{children:"With streamlined upgrade capabilities, LLMOS ensures that you can quickly adopt new features and improvements with minimal disruption."}),"\n",(0,t.jsx)(n.h2,{id:"llmos-use-cases",children:"LLMOS Use Cases"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"AI Research & Development:"})," Simplify the management of LLMs and AI infrastructure, allowing researchers to focus on innovation rather than operational overhead."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Enterprise AI Solutions:"})," Streamline the deployment of AI applications with scalable infrastructure, making it easier to manage models, storage, and resources across multiple teams."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Data Science Workflows:"})," With notebook integration and powerful cluster computing, LLMOS is ideal for data scientists looking to run complex experiments at scale."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"AI-Driven Products:"})," From chatbots to automated content generation, LLMOS simplifies the process of deploying LLM-based products that can serve millions of users and scale up horizontally."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"getting-started-with-llmos",children:"Getting Started with LLMOS"}),"\n",(0,t.jsxs)(n.p,{children:["Ready to get started with ",(0,t.jsx)(n.strong,{children:"LLMOS"}),"? Our ",(0,t.jsx)(n.a,{href:"https://llmos.1block.ai/docs/",children:"detailed documentation"})," covers everything from installation to advanced features. Whether you\u2019re a developer, data scientist, or system administrator, you\u2019ll find LLMOS easy to set up and use, below is the quick-start guideline."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Make sure your nodes meet the ",(0,t.jsx)(n.a,{href:"https://llmos.1block.ai/docs/installation/requirements",children:"requirements"})," before proceeding."]})}),"\n",(0,t.jsx)(n.h5,{id:"installation-script",children:"Installation Script"}),"\n",(0,t.jsxs)(n.p,{children:["LLMOS can be installed to a bare-metal server or a virtual machine. To bootstrap a ",(0,t.jsx)(n.strong,{children:"new cluster"}),", follow the steps below:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -sfL https://get-llmos.1block.ai | sh -s - --cluster-init --token mytoken\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To monitor installation logs, run ",(0,t.jsx)(n.code,{children:"journalctl -u llmos -f"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If your environment requires internet access through a proxy, set the ",(0,t.jsx)(n.code,{children:"HTTP_PROXY"})," and ",(0,t.jsx)(n.code,{children:"HTTPS_PROXY"})," environment variables before running the installation script:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export HTTP_PROXY=http://proxy.example.com:8080\nexport HTTPS_PROXY=http://proxy.example.com:8080\nexport NO_PROXY=127.0.0.0/8,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16 # Replace the CIDRs with your own\n"})}),"\n",(0,t.jsx)(n.h5,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsxs)(n.p,{children:["After installing LLMOS, access the dashboard by navigating to ",(0,t.jsx)(n.code,{children:"https://<server-ip>:8443"})," in your web browser."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["LLMOS will create a default ",(0,t.jsx)(n.code,{children:"admin"})," user with a randomly generated password. To retrieve the password, run the following command on the ",(0,t.jsx)(n.strong,{children:"cluster-init"})," node:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl get secret --namespace llmos-system llmos-bootstrap-passwd -o go-template='{{.data.password|base64decode}}{{\"\\n\"}}'\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"welcome-login",src:s(68985).Z+"",width:"2770",height:"1494"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Upon logging in, you will be redirected to the setup page. Configure the following:"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Set a ",(0,t.jsx)(n.strong,{children:"new password"})," for the admin user (strong passwords are recommended)."]}),"\n",(0,t.jsxs)(n.li,{children:["Configure the ",(0,t.jsx)(n.strong,{children:"server URL"})," that all other nodes in your cluster will use to connect.\n",(0,t.jsx)(n.img,{alt:"welcome-config",src:s(74377).Z+"",width:"3138",height:"1642"})]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["After setup, you will be redirected to the home page where you can start using LLMOS.\n",(0,t.jsx)(n.img,{alt:"home-page",src:s(2217).Z+"",width:"2738",height:"1030"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"more-examples",children:"More Examples"}),"\n",(0,t.jsx)(n.p,{children:"To learn more about using LLMOS, explore the following resources:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://llmos.1block.ai/docs/user_guide/llm_management/serve",children:"Chat with LLMOS Models"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://llmos.1block.ai/docs/user_guide/llm_management/notebooks#create-a-notebook",children:"Creating a Jupyter Notebook"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://llmos.1block.ai/docs/user_guide/ml_clusters",children:"Creating a Machine Learning Cluster"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"join-us",children:"Join Us"}),"\n",(0,t.jsxs)(n.p,{children:["We are excited to build a community around the project. If you're interested, please join us on ",(0,t.jsx)(n.a,{href:"https://discord.gg/5BnNqC5ccB",children:"Discord"})," or participate in ",(0,t.jsx)(n.a,{href:"https://github.com/llmos-ai/llmos/discussions",children:"Github Discussions"})," to discuss or contribute the project. If you need to contact us, please reach out to us via ",(0,t.jsx)(n.a,{href:"https://1block.ai/contact-us",children:"here"}),". We look forward to collaborating with you, thanks!"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},63997:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/api-keys-74bd66c1fc05c2c1183c2f675e48fcab.png"},2217:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/home-page-bd27b772850f0c4045d751d5ac234759.png"},24493:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/jupyter-notebook-145dc8640e7880fbc46b580892dad74b.png"},28986:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/ml-cluster-6e87c427e6787d2036b93ad99e75ecc2.png"},54963:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/model-service-1790927592b7c18804bc29bf8027f50c.png"},66435:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/node-management-98fdba71aac3b6e5e2f9e6f289d5cdaf.png"},90517:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/nodes-4837943f74e59a55d62dc9a81d772610.png"},55432:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/role-templates-8569a56da12684b91b6bc025f4a72881.png"},56186:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/rook-ceph-de00726819991f09772f8822f6a4bd8f.png"},74377:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/welcome-config-fed99f36b5282886bfd7553c8a099b57.png"},68985:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/welcome-login-f54ce42ab9e3cd39a8e05dc9f8257089.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>o});var t=s(67294);const i={},a=t.createContext(i);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);