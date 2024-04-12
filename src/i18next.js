import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // HEADER
      home: "Home",
      about: "About Us",
      services: "Services",
      blog: "Blog",
      academy: "Academy",
      career: "Career",
      contact: "Contact",
      portfolio: "Portfolio",
      // FOOTER
      location: "Location",
      locationStreet: "T.ShevChenko 12, Tbilisi",
      yourEmail: "Your Email",
      yourMessage: "send us your message...",
      // HOME: Hero section
      developTheRightMarketing: "Develop the right marketing",
      strategyForYourBusiness: "strategy for your business",
      branding: "Branding",
      webDevelopment: "Web development",
      production: "Production",
      createContent: "Create content",
      socialMedia: "Social media",
      management: "management",
      marketingCreating: "Marketing creating",
      strategy: "a strategy",
      // HOME: What are we doing section
      whatAreWeDoing: "What are we doing!",
      weDoingDesc1:
        "We explore the path of your business in the digital world,",
      weDoingDesc2: "make it competitive, create an image that will strengthen",
      weDoingDesc3: "its position and establish it as a brand",
      brandingText:
        "Designing your business logo and brand book, and incorporatingthem into printed materials and souvenirs.",
      managementCardHeading: "Management of social networks",
      managementText:
        "Professional management of facebook and instagram pages, planning of paid advertising campaigns and monitoring of results.",
      strategyHeading: "Creating a marketing strategy",
      strategyText:
        "We will craft a tailored marketing strategy for your business, prioritizing your interests and market needs for maximum effectiveness.",
      contentCreation: "Content creation",
      contentText:
        "Creating creative copy and modern visuals to showcase your product at its finest.",
      videoPhoto: "videography / photography",
      videoPhotoText:
        "High-quality photo and video production services for your product, from capture to processing.",
      webDevHeading: "Website Development",
      webDevText:
        "Creating a website for your business with WordPress and other modern technologies.",
      BrandAudit: "Brand Audit",
      BrandAuditText:
        "Offering a brand audit for different platforms, which involves a meticulous review of your campaigns, targeting, creatives",
      // HOME: Workflow section
      workflowHeading: "Our workfl0w",
      workflowDesc:
        "Our work process consists of several stages. Every project goes through each of these steps to arrive at the outcome with the right ambitions and expectations.",
      workflowDesc2:
        "We plan to meet with the customer, get to know his business, try to understand his interests and wishes as much as possible",
      introduction: "Introduction",
      workflowStrategy: "Strategy",
      workflow: "Workflow",
      results: "Results",
      // HOME: Partners section
      partnersHeading: "Our partners",
      // HOME: Blogs section
      blogsHeading: "Blogs",
      seeMore: "See More",
      singleBlogHeading: "In The Waves Of The Shining Sun",
      // HOME: Nichateau section
      nichateau: "Nichateau",
      favProjects: "One of our favorite projects",
      nichateauDesc1: "Wine as a part of history,",
      nichateauDesc2:
        "traditional dishes as a part of culture, vineyards as a part of nature,",
      nichateauDesc3:
        "and cellars as a part of grape house - we took all the delicious details",
      nichateauDesc4:
        "and created the taste of Georgian culture under the name of",
      // HOME: About section
      aboutCompany: "About Company",
      aboutCompanyText:
        "From February 2021, the company takes care of digitalization of your activities The young and creative team of Simple Steps offers modern and customized services to customers Individual strategy for each project Simple steps to great success - that's what our team does",

      // ABOUT: Team section
      teamEndHeading: "We are looking for you!",
      teamEndHeading2:
        "Do you want to be part of the most ambitious and modern team?",
      contactUs: "Contact Us",
      // ABOUT: Wwa section
      whoAreWe: "Who are we?",
      aboutText1:
        "SIMPLE STEPS entered the Georgian market on February 15, 2021, with a mission to boost startups' visibility on social networks through effective advertising. Today our company already helps many well-known businesses to take the right marketing steps. Our main distinguishing feature is an individual approach to projects. By meticulously studying our clients' interests and objectives, we create tailored strategies to ensure their success. Supporting start-ups and interesting ideas remains one of our main priorities.",
      aboutText2:
        "Our aim is to assist companies in reaching higher levels of success, which is much easier with our team. If you've ever wondered, 'How can I increase my brand's visibility?' then our goal is to support you and your business in the world of marketing. To take easy steps towards great success, we offer the following services: Creating a marketing strategy / Management of social networks / Content creation / Production Branding",
      ourGoal: "Our goal",

      // SERVICES: Services section
      sectionHeading1: "Increase your brand",
      sectionHeading2: "awareness on social media",
      sectionHeading3: "Develop the right marketing",
      sectionHeading4: "strategy for your business",
      // SERVICES: Tabs section
      tabsHeading: "Our Workflow",
      tabsDesc:
        "Our work process consists of several stages. Every project goes through each of these",
      tabsDesc2:
        "steps to arrive at the outcome with the right ambitions and expectations.",
      tabText:
        "We plan to meet with the customer, get to know his business, try to",
      tabText2: "understand his interests and wishes as much as possible",
      tabText3:
        "A thorough product/business study begins, along with relevant market and",
      tabText4:
        "competitor research, which is why a strategy is written for what type of",
      tabText5: "content and advertising we will work with for this business.",
      tabText6:
        "The work process begins: we plan photo/video shoots, publish posts,",
      tabText7: "advertise the brand on social networks",
      tabText8:
        "We inform the customer of the obtained results and send a weekly or monthly",
      tabText9: "report",

      // COMING SOON
      comingSoon: "Coming S00n",

      // PORTFOLIO
      photography: "Photography",
      portfolioSocialMedia: "Social Media",

      // CONTACT: Form section
      fullName: "Full Name*",
      mobileNumber: "Mobile Number*",
      email: "E-Mail*",
      companyName: "Company Name",
      message: "Message",
      contactSpan1:
        "If you are interested in our services, please leave your contact information and we",
      contactSpan2: "will definitely contact you",
      successMessage: "Information has been submited successfully!",
      errorMessage: "Couldn't submit the form",
      // CONTACT: Contact section
      contactHeading1: "Send us your data",
      contactHeading2: "Our team will contact you",
      // CONTACT: Introduce section
      introduceHeading: "Introduce us to your business",
      introduceSubHeading1:
        "The services we offer will strengthen your position in the digital world, make you more competitive",
      introduceSubHeading2: "and help you position your brand correctly.",
      marketingStrategy: "Creating a marketing strategy",
      socialManagement: "Management of social networks",

      // BRANDING
      logoDesign: "Logo Design",
      moodBoard: "Moodboard",
      brandBook: "Brandbook",
      brandIdentity: "Brand Identity",
      brandGuideline: "Brand Guideline",
      brandAnalytic: "Brand Analytic",
      brandDesc: `Branding is the process of establishing a recognizable identity and
      reputation for a product, service, company, or individual in the
      minds of consumers. It involves elements like the brand name, logo,
      design, messaging, and overall customer experience. Effective
      branding sets a product apart from competitors, creates positive
      emotions, builds trust and loyalty, and influences purchasing
      decisions. It goes beyond just visual elements to encompass the
      values,  personality, and story of the brand, shaping how it
      is perceived and remembered by  its target audience.`,
      serviceIncludes: "What Include",
      brandDescTwo:
        "Branding for a business is like naming a child. It is in this process that it is determined how the company will be introduced toa wide audience. A correctly chosen name and logo is an importantprerequisite for establishing oneself in the market.",
      brandDescThree:
        "At first, we will thoroughly study the brand so that every next stepis based on it. All details, whether textual or visual, are builttaking into account the brand concept, which further strengthens theplace of a particular brand in the market, makes it unique anddistinctive.",
      includeHeading:
        "Designing your business logo and brand book, and incorporating theminto printed materials and souvenirs.",
      clients: "Clients",

      // BRAND AUDIT
      brandAuditDesc: `A brand audit is a detailed review of a company's branding strategies, assets, and market presence. It helps you determine the strength of your brand together with its weaknesses or inconsistencies and opportunities for improvement and innovations.`,
      brandAuditDescTwo:
        "At Simple Steps, we specialize in conducting thorough brand audits with the involvement of our creative and technical teams to help businesses enhance their brand image and market positioning.",
      brandAuditIncludeHeading:
        "A Brand Audit Improves The Visual Identity Of Your Business",
      pageAuditResults: "Page Audit Results",
      recommendations: "Recommendations",
      implementationSupport: "Implementation Support",
      socialMediaBrief: "Social Media Brief",

      // MANAGEMENT
      fullHolding: `Full holding of "page"`,
      placementOfPosts: "Placement of posts",
      schedule: "Schedule/run ads",
      uiux: "UI/UX Design",
      website: "Website",
      managementDesc: `We expertly handle your Facebook and Instagram pages, meticulously plan targeted paid advertising campaigns, and closely monitor outcomes for optimal performance. Trust us to elevate your social media presence and drive meaningful engagement with your audience.`,
      managementIncludeHeading:
        "A good social network is the key to the success of your business",
      managementDescTwo: `For the success of a business, it is not enough just to be known or to conduct sales correctly. In order to gain customer trust and maintain stability in the market, it is necessary to establish a brand identity that will be positively remembered by customers. We create Facebook and Instagram pages tailored to the user's interests and needs, which involves managing both the technical and the content part.`,

      // MARKETING
      marketingDesc:
        "We create tailored solutions to meet your business needs, ensuring maximum effectiveness and impact. Our approach is customized to address your unique challenges, delivering results that drive your business forward.",
      marketingIncludeHeading:
        "A marketing strategy is the first step to great success",
      marketingDescTwo:
        "A marketing strategy is based on the company's goals, the study of its competitors and the definition of potential customers. A marketing strategy is an action plan for a business.",
      marketingDescThree:
        "In the process of developing a marketing strategy, we will study the market and competitors. We determine who is interested in a particular product in order to deliver information to the right people. After determining the audience, we plan campaigns, posts, graphic works tailored to the target group, which give the best results.",
      competitorsStudy: "Competitors study",
      definingContentDirections: "Defining content directions",
      targetAudience: "Target audience selection/targeting",
      planning: "Planning of advertising campaigns",

      // CONTENT
      contentIncludeHeading:
        "Constantly updated content indicates the credibility of the business",
      contentDesc:
        "We specialize in creating compelling copy and modern visual content to present your product in the best possible way. Our goal is to captivate your audience with engaging narratives and eye-catching imagery, ensuring that your product grabs attention and connects with potential customers.",
      contentDescTwo:
        "Content is a static or dynamic post on a social network - photo, video. In order for the user to perceive you as an effective and active brand, it is necessary that the content created by you constantly responds to current processes.",
      contentDescThree:
        "After defining the audience, we predetermine the content of the posts and create a calendar in which we write a detailed plan for a month. This allows us to make the work process completely transparent for our customers.",
      determining: "Determining the content of posts",
      subscription: "Subscription of one month plan - calendar",
      creationGraphic: "Creation of copy and graphic works",

      // PHOTO / VIDEO
      createBreef: "Create a brief",
      arrangement: "Set arrangement",
      video: "video",
      productionDesc:
        "Providing professional photo and video shooting services, we meticulously process visuals to ensure the highest quality. From capturing precious moments to refining them to perfection, we bring your vision to life with expertise and precision.",
      productionDescTwo:
        "The customer must see that the task of the business is to perform every detail professionally. The visual aspect indicates the quality of service.",
      productionDescThree:
        "We offer professional photo/video shooting. The photos taken are processed and placed in the form of posts on social networks. We create a characteristic style for each product, according to which the set is organized",
      productionIncludeHeading:
        "A professionally edited photo/video emphasizes the quality and credibility of the business.",

      // WEB DEVELOPMENT
      webHeading: "UI/UX & web-development",
      webDesc:
        "A website offers customers a convenient way to learn about a company and its offerings without the need for physical visits or phone calls. This accessibility can lead to higher customer engagement and satisfaction.",
      webDescTwo:
        "A professionally designed website will instill confidence in potential customers in the products or services your business offers. Through the website, the user will easily find out all the information he needs in one place, be it a list of products and services, contact number, location, or working hours.",
      webDescThree:
        "We create a perfect website tailored to business goals and interests that will simplify the user experience.",
      webIncludeHeading:
        "A website is a powerful marketing tool for a business.",
      uxResearch: "ux RESEARCH",
      complexity: "Determining the complexity of the site",
      functionality: "Evaluation of functionality",
      technical: "Writing technical tasks",
    },
  },
  ge: {
    translation: {
      // HEADER
      home: "მთავარი",
      about: "ჩვენ შესახებ",
      services: "სერვისები",
      blog: "ბლოგი",
      academy: "აკადემია",
      career: "კარიერა",
      contact: "კონტაქტი",
      portfolio: "პორტფოლიო",
      // FOOTER
      location: "მისამართი",
      locationStreet: "ტ.შევჩენკოს 12, თბილისი",
      yourEmail: "თქვენი მეილი",
      yourMessage: "დაგვიტოვეთ შეტყობინება",
      send: "გაგზავნა",
      // HOME: Hero section
      developTheRightMarketing: "შეიმუშავე სწორი მარკეტინგული",
      strategyForYourBusiness: "სტრატეგია შენი ბიზნესისათვის",
      branding: "ბრენდინგი",
      webDevelopment: "ვებ დეველოპმენტი",
      production: "პროდაქშენი",
      createContent: "კონტენტის შექმნა",
      socialMedia: "სოციალური მედიის",
      management: "მენეჯმენტი",
      marketingCreating: "მარკეტინგული სტრატეგიის",
      strategy: "შექმნა",
      // HOME: What are we doing section
      whatAreWeDoing: "რას ვაკეთებთ ჩვენ!",
      weDoingDesc1: "ჩვენ ვმართავთ თქვენს ბიზნესს ციფრულ მედიაში,",
      weDoingDesc2: "ვხდით მას კონკურენტუნარიანს, ვუქმნით ძლიერ იმიჯს და",
      weDoingDesc3: "ვამყარებთ მას, როგორც ბრენდს.",
      brandingText:
        "ლოგოსა და ბრენდ ბუქის შექმნა ბიზნესისთვის, მათი გარდაქმნა ბეჭდურ მასალად.",
      managementCardHeading: "სოციალური ქსელების მართვა",
      managementText:
        "ფეისბუქისა და ინსტაგრამის გვერდების პროფესიონალური მართვა, ფასიანი სარეკლამო კამპანიების დაგეგმვა და შედეგების მონიტორინგი.",
      strategyHeading: "მარკეტინგული სტრატეგიის შექმნა",
      strategyText:
        "შესაბამისი ბაზრისა და მოთხოვნების შესწავლის საფუძველზე ბიზნესისთვის ყველაზე ეფექტურ მარკეტინგულ სტრატეგიას შევიმუშავებთ, რომელშიც შენი ინტერესები მაქსიმალურად გათვალისწინებული იქნება.",
      contentCreation: "კონტენტის შექმნა",
      contentText:
        "კრეატიული ქოფისა და თანამედროვე ვიზუალის შექმნა, პროდუქტის საუკეთესოდ წარმოჩენა.",
      videoPhoto: "ფოტო / ვიდეო გადაღება",
      videoPhotoText:
        "მაღალი ხარისხის ფოტო-ვიდეო სერვისი გადაღებიდან პროფესიონალურად დამუშავებამდე. ",
      webDevHeading: "ვებ დეველოპმენტი",
      webDevText:
        "ვებ-გვერდის შექმნა შენი ბიზნესისთვის WordPress-ისა და სხვა თანამედროვე ტექნოლოგიების საშუალებით.",
      BrandAudit: "ბრენდ აუდიტი",
      BrandAuditText:
        "გთავაზობთ ბრენდის აუდიტს სხვადასხვა პლატფორმისთვის, რაც  კამპანიების, მიზნობრიობის, კრეატიულობის დეტალურ მიმოხილვას გულისხმობს ",
      // HOME: Workflow section
      workflowHeading: "ჩვენი სამუშაო პროცესი",
      workflowDesc:
        "ჩვენი სამუშაო პროცესი რამდენიმე ეტაპისგან შედგება. ყველა პროექტი გადის თითოეულ ამ საფეხურს, რათა მიაღწიოს შედეგს სწორი ამბიციებითა და მოლოდინებით.",
      workflowDesc2:
        "ვგეგმავთ კლიენტთან შეხვედრას, მისი ბიზნესის გაცნობას, მაქსიმალურად ვეცდებით გავიგოთ მისი ინტერესები და სურვილები",
      introduction: "შესავალი",
      workflowStrategy: "სტრატეგია",
      workflow: "სამუშაო პროცესი",
      results: "შედეგები",
      // HOME: Partners section
      partnersHeading: "ჩვენი პარტნიორები",
      // HOME: Blogs section
      blogsHeading: "ბლოგი",
      seeMore: "იხილეთ მეტი",
      singleBlogHeading: "ანათე მზის ტალღებში",
      // HOME: Nichateau section
      nichateau: "ნიშატო",
      favProjects: "ერთ-ერთი ჩვენი ფავორიტი პროექტებიდან",
      nichateauDesc1: "ღვინო, როგორც ისტორიის ნაწილი",
      nichateauDesc2:
        "ტრადიციული კერძები, როგორც კულტურის ნაწილი, ვენახი, როგორც ბუნების ნაწილი",
      nichateauDesc3:
        "და ქვევრი, როგორც ყურძნის სახლი. - ჩვენ ავიღეთ ყველა გემრიელი დეტალი",
      nichateauDesc4: "და შევქმენით ქართული კულტურის გემო სახელად",
      // HOME: About section
      aboutCompany: "კომპანიის შესახებ",
      aboutCompanyText:
        "2021 წლის თებერვლიდან კომპანია ზრუნავს თქვენი ბიზნესის განვითარებაზე. Simple Steps-ის ახალგაზრდა და კრეატიული გუნდი მომხმარებელს სთავაზობს თანამედროვე და მორგებულ სერვისებს. თითოეული პროექტის ინდივიდუალური სტრატეგია, მარტივი ნაბიჯები დიდი წარმატებისკენ - აი რას აკეთებს ჩვენი გუნდი",

      // ABOUT: Team section
      teamEndHeading: "ჩვენ გეძებთ შენ!",
      teamEndHeading2:
        "გინდა გახდე ყველაზე ამბიციური და განვითარებული გუნდის ნაწილი?",
      contactUs: "დაკვიკავშირდი",
      // ABOUT: Wwa section
      whoAreWe: "ვინ ვართ ჩვენ?",
      aboutText1:
        "SIMPLE STEPS ქართულ ბაზარზე 2021 წლის 15 თებერვალს გამოჩნდა. ჩვენი მიზანია, ეფექტური რეკლამის საშუალებით სოციალურ ქსელებში სტარტაპების ხილვადობა  გავზარდოთ. დღეს ჩვენი კომპანია უამრავ ცნობილ ბიზნესს სწორი მარკეტინგული ნაბიჯების გადადგმაში ეხმარება. ჩვენი მთავარი განმასხვავებელი თვისება პროექტებისადმი ინდივიდუალური მიდგომაა. კლიენტების ინტერესებისა და მიზნების საფუძვლიანი შესწავლის გზით ჩვენ ვქმნით მორგებულ სტრატეგიებს ბიზნესების წარმატების უზრუნველსაყოფად. სტარტაპებისა და საინტერესო იდეების მხარდაჭერა ჩვენს ერთ-ერთ მთავარ პრიორიტეტად რჩება.",
      aboutText2: `ჩვენი მიზანია, კომპანიებმა წარმატების უფრო მაღალ საფეხურს მიაღწიონ, რაც ჩვენი გუნდის დახმარებით ბევრად უფრო მარტივია. ოდესმე თუ გიფიქრია, "როგორ გავზარდო ჩემი ბრენდის ხილვადობა?", მაშინ ჩვენ დაგეხმარებით, დიდი წარმატებისკენ სვლა მარტივი ნაბიჯებით დაიწყო. გთავაზობთ შემდეგ სერვისებს: მარკეტინგული სტრატეგიის შექმნა, სოციალური მედიის მენეჯმენტი, კონტენტის შექმნა, ბრენდის პროდაქშენი`,
      ourGoal: "ჩვენი მიზანი",

      // SERVICES: Services section
      sectionHeading1: "გაზარდეთ თქვენი ბრენდის",
      sectionHeading2: "ინფორმირებულობა სოციალურ მედიაში",
      sectionHeading3: "შეიმუშავეთ სწორი მარკეტინგული",
      sectionHeading4: "სტრატეგია თქვენი ბიზნესისათვის",
      // SERVICES: Tabs section
      tabsHeading: "ჩვენი მუშაობის პროცესი",
      tabsDesc:
        "ჩვენი სამუშაო პროცესი რამდენიმე ეტაპისგან შედგება. თითოეული პროექტი გადის თითოეულ",
      tabsDesc2: "ნაბიჯს სწორი ამბიციებისა და მოლოდინების მისაღწევად.",
      tabText:
        "ვგეგმავთ მომხმარებელთან შეხვედრას, მისი ბიზნესის გაცნობას, ვცდილობთ",
      tabText2: "შეძლებისდაგვარად გავიგოთ მისი ინტერესები და სურვილები",
      tabText3:
        "იწყება პროდუქტის/ბიზნესის საფუძვლიანი შესწავლა შესაბამის ბაზართან და",
      tabText4: "კონკურენტების კვლევა, რის შემდეგაც იწერება სტრატეგია რა ტიპის",
      tabText5: "შინაარსი და რეკლამა დაგვჭირდება ამ ბიზნესისთვის.",
      tabText6:
        "იწყება სამუშაო პროცესი: ვგეგმავთ ფოტო/ვიდეო გადაღებებს, ვაქვეყნებთ პოსტებს,",
      tabText7: "ვარეკლამებთ ბრენდს სოციალურ ქსელებში",
      tabText8:
        "მომხმარებელს ვაცნობთ მიღებულ შედეგებს და ვუგზავნით ყოველკვირეულ ან ყოველთვიურ",
      tabText9: "ანგარიშს",

      // COMING SOON
      comingSoon: "გვერდი მალე დაემატება",

      // PORTFOLIO
      photography: "ფოტოგრაფია",
      portfolioSocialMedia: "სოციალური მედია",

      // CONTACT: form section
      fullName: "სრული სახელი*",
      mobileNumber: "ტელეფონის ნომერი*",
      email: "მეილი*",
      companyName: "კომპანიის სახელწოდება",
      message: "შეტყობინება",
      contactSpan1:
        "თუ დაინტერესებული ხართ ჩვენი სერვისებით, გთხოვთ დაგვიტოვეთ თქვენი საკონტაქტო ინფორმაცია და",
      contactSpan2: "ჩვენ აუცილებლად დაგიკავშირდებით",
      successMessage: "ინფორმაცია წარმატებით გაიგზავნა!",
      errorMessage: "გაგზავნა ვერ მოხერხდა",
      // CONTACT: Contact section
      contactHeading1: "გამოგვიგზავნეთ თქვენი მონაცემები",
      contactHeading2: "და ჩვენი გუნდი დაგიკავშირდებათ",
      // CONTACT: Introduce section
      introduceHeading: "წარმოგვიდგინეთ თქვენი ბიზნესი",
      introduceSubHeading1:
        "სერვისები, რომლებსაც ჩვენ გთავაზობთ გაამყარებს თქვენი ბიზნესის პოზიციას თანამდეროვე სამყაროში",
      introduceSubHeading2: "და გახდის თქვენს ბიზნესს უფრო კონკურენტუნარიანს",
      marketingStrategy: "მარკეტინგული სტრატეგიის შემუშავება",
      socialManagement: "სოციალური მედიის მართვა",

      // BRANDING
      logoDesign: "ლოგოს დიზაინი",
      moodBoard: "მუდბორდი",
      brandBook: "ბრენდბუქი",
      brandIdentity: "ბრენდის შესწავლა",
      brandGuideline: "ბრენდ გაიდლაინი",
      brandAnalytic: "ბრენდ ანალიტიკა",
      brandDesc: `ბრენდინგი არის პროდუქტის, მომსახურების, კომპანიის ან ინდივიდისთვის ცნობადი იდენტობის და რეპუტაციის დამყარების პროცესი მომხმარებელთა გონებაში. ის მოიცავს ისეთ ელემენტებს, როგორიცაა ბრენდის სახელი, ლოგო, დიზაინი, შეტყობინებები და მომხმარებლის საერთო გამოცდილება. ეფექტური ბრენდინგი განასხვავებს პროდუქტს კონკურენტებისგან, ქმნის დადებით ემოციებს, აყალიბებს ნდობას და ლოიალობას და გავლენას ახდენს შესყიდვის გადაწყვეტილებებზე. ის ცდება მხოლოდ ვიზუალურ ელემენტებს და მოიცავს ბრენდის ღირებულებებს, პიროვნებას და ისტორიას, აყალიბებს იმაზე, თუ როგორ აღიქვამს და ახსოვს მისი სამიზნე აუდიტორია.`,
      serviceIncludes: "სერვისი მოიცავს:",
      brandDescTwo:
        "ბრენდინგი ბიზნესისთვის იგივეა, რაც ბავშვისთვის სახელის დარქმევა. სწორედ ამ პროცესში განისაზღვრება, როგორ გაეცნობა კომპანია ფართო აუდიტორიას. სწორად შერჩეული სახელი და ლოგო ბაზარზე თავის დამკვიდრების მნიშვნელოვანი წინაპირობაა. თავდაპირველად, საფუძვლიანად შევისწავლით ბრენდს, რათა ყოველი მომდევნო ნაბიჯი სწორედ მასზე დაყრდნობით გადაიდგას.",
      brandDescThree:
        "ყველა დეტალი, ტექსტურ თუ ვიზუალურ ნაწილში, აგებულია ბრენდის კონცეფციის გათვალისწინებით, რაც კიდევ უფრო ამყარებს კონკრეტული ბრენდის ადგილს ბაზარზე, ხდის მას თვითმყოფადსა და გამორჩეულს.",
      includeHeading:
        "თქვენი ბიზნესის ლოგოს და ბრენდბუქის დიზაინი და მათი ჩართვა ბეჭდურ მასალებსა და სუვენირებში.",
      clients: "კლიენტი",

      // BRAND AUDIT
      brandAuditDesc: `ბრენდის აუდიტი არის კომპანიის ბრენდინგის სტრატეგიების, აქტივების და ბაზარზე ყოფნის დეტალური მიმოხილვა. ის გეხმარებათ განსაზღვროთ თქვენი ბრენდის სიძლიერე მის სუსტ მხარეებთან ან შეუსაბამობებთან და გაუმჯობესებისა და ინოვაციების შესაძლებლობებთან ერთად.`,
      brandAuditDescTwo:
        "ბრენდის აუდიტი კომპანიის ბრენდინგის, სტრატეგიების, აქტივებისა და ბაზარზე ხილვადობის დეტალურ მიმოხილვას გულისხმობს. ის გეხმარება, განსაზღვრო შენი ბრენდის ძლიერი, თუ სუსტი მხარეები, ან შესაძლებლობები გაუმჯობესებისა და ინოვაციებისთვის. ჩვენ, Simple Steps, კრეატიული და ტექნიკური გუნდის ჩართულობით, სპეციალიზირებულები ვართ ბრენდის სრულყოფილი აუდიტის ჩატარებაში, რათა ბიზნესებს ბრენდის იმიჯისა და ბაზარზე სწორად პოზიციონირებაში დავეხმაროთ.",
      brandAuditIncludeHeading:
        "ბრენდის აუდიტი აუმჯობესებს თქვენი ბიზნესის ვიზუალურ იდენტობას",
      pageAuditResults: "ფეიჯის აუდიტის შედეგები",
      recommendations: "რეკომენდაციები",
      implementationSupport: "იმპლემენტაციის მხარდაჭერა",
      socialMediaBrief: "სოციალური მედიის ბრიფი",

      // MANAGEMENT
      fullHolding: `გვერდის სრული კონტროლი`,
      placementOfPosts: "პოსტების განთავსება",
      schedule: "რეკლამების დაგეგმვა/გაშვება",
      uiux: "UI/UX დიზაინი",
      website: "ვებსაიტი",
      managementDesc: `ჩვენ პროფესიონალურად ვმართავთ თქვენს Facebook და Instagram გვერდებს, ზედმიწევნით ვგეგმავთ მიზნობრივ ფასიან სარეკლამო კამპანიებს და ყურადღებით ვაკვირდებით შედეგებს ოპტიმალური მუშაობისთვის. გვერწმუნეთ თქვენი ყოფნის ამაღლება სოციალურ მედიაში და მნიშვნელოვანი ჩართულობა თქვენს აუდიტორიასთან.`,
      managementIncludeHeading:
        "კარგი სოციალური ქსელი არის თქვენი ბიზნესის წარმატების გასაღები",
      managementDescTwo: `ჩვენ პროფესიონალურად ვმართავთ შენი ბიზნესის ფეისბუქ და ინსტაგრამ გვერდებს, ზედმიწევნით ვგეგმავთ მიზნობრივ ფასიან სარეკლამო კამპანიებს და ყურადღებით ვაკვირდებით შედეგებს საუკეთესო პერფორმანსისთვის. 
      გვანდე შენი ბიზნესის ეფექტურობისა და სოციალურ ქსელში მომხმარებელთა ჩართულობის ზრდა ჩვენ.`,

      // MARKETING
      marketingDesc:
        "ჩვენ ვქმნით მორგებულ გადაწყვეტილებებს თქვენი ბიზნესის მოთხოვნილებების დასაკმაყოფილებლად, რაც უზრუნველყოფს მაქსიმალურ ეფექტურობას და გავლენას. ჩვენი მიდგომა მორგებულია თქვენი უნიკალური გამოწვევების მოსაგვარებლად, შედეგების მიწოდებით, რაც თქვენს ბიზნესს წინ უძღვის.",
      marketingIncludeHeading:
        "მარკეტინგული სტრატეგია არის პირველი ნაბიჯი დიდი წარმატებისკენ",
      marketingDescTwo:
        "მარკეტინგული სტრატეგია ეფუძნება კომპანიის მიზნებს, მისი კონკურენტების შესწავლას და პოტენციური მომხმარებლების განსაზღვრას. მარკეტინგული სტრატეგია არის სამოქმედო გეგმა ბიზნესისთვის.",
      marketingDescThree:
        "მარკეტინგული სტრატეგიის შემუშავების პროცესში შევისწავლით ბაზარს და კონკურენტებს. ჩვენ ვადგენთ ვინ არის დაინტერესებული კონკრეტული პროდუქტით, რათა მივაწოდოთ ინფორმაცია სწორ ადამიანებს. აუდიტორიის განსაზღვრის შემდეგ ვგეგმავთ სამიზნე ჯგუფზე მორგებულ კამპანიებს, პოსტებს, გრაფიკულ ნამუშევრებს, რომლებიც საუკეთესო შედეგს იძლევა.",
      competitorsStudy: "კონკურენტების შესწავლა",
      definingContentDirections: "კონტენტის მიმართულებების განსაზღვრა",
      targetAudience: "სამიზნე აუდიტორია",
      planning: "სარეკლამო კამპანიების დაგეგმვა",

      // CONTENT
      contentIncludeHeading:
        "მუდმივად განახლებული შინაარსი მიუთითებს ბიზნესის სანდოობაზე",
      contentDesc:
        "ჩვენ დახელოვნებულები ვართ ტექსური, თუ ვიზუალური კონტენტის შექმნაში, რომელიც პროდუქტს საუკეთესოდ წარმოაჩენს. მიმზიდველი ნარატივებითა და გამორჩეული ვიზუალით პროდუქტი მეტ ყურადღებას იპყრობს და პოტენციურ მომხმარებლამდეც მარტივად აღწევს.",
      contentDescTwo:
        "კონტენტი არის სტატიკური ან დინამიური პოსტი სოციალურ ქსელში - ფოტო, ვიდეო. იმისათვის, რომ მომხმარებელმა აღგიქვათ, როგორც ეფექტურ და აქტიურ ბრენდს, აუცილებელია თქვენს მიერ შექმნილი კონტენტი მუდმივად რეაგირებდეს მიმდინარე პროცესებზე.",
      contentDescThree:
        "აუდიტორიის განსაზღვრის შემდეგ წინასწარ განვსაზღვრავთ პოსტების შინაარსს და ვქმნით კალენდარს, რომელშიც ვწერთ დეტალურ გეგმას ერთი თვის განმავლობაში. ეს საშუალებას გვაძლევს გავხადოთ სამუშაო პროცესი სრულიად გამჭვირვალე ჩვენი მომხმარებლებისთვის.",
      determining: "პოსტების შინაარსის განსაზღვრა",
      subscription: "ერთთვიანი გეგმის გამოწერა - კალენდარი",
      creationGraphic: "ასლის და გრაფიკული ნამუშევრების შექმნა",

      // PHOTO / VIDEO
      createBreef: "ბრიფის შექმნა",
      arrangement: "გადაღებების დაგეგმვა",
      video: "ვიდეო",
      productionDesc:
        "გთავაზობთ პროფესიონალურ ფოტო და ვიდეო გადაღების სერვისებს, ჩვენ ზედმიწევნით ვამუშავებთ ვიზუალს უმაღლესი ხარისხის უზრუნველსაყოფად. ძვირფასი მომენტების აღბეჭდვიდან დაწყებული მათ სრულყოფამდე დახვეწამდე, ჩვენ ვაცოცხლებთ თქვენს ხედვას გამოცდილებითა და სიზუსტით.",
      productionDescTwo:
        "მომხმარებელმა უნდა დაინახოს, რომ ბიზნესის ამოცანაა ყოველი დეტალის პროფესიონალურად შესრულება. ვიზუალური ასპექტი მიუთითებს მომსახურების ხარისხზე.",
      productionDescThree:
        "გთავაზობთ პროფესიონალურ ფოტო/ვიდეო გადაღებას. გადაღებული ფოტოები მუშავდება და განთავსდება პოსტების სახით სოციალურ ქსელებში. ჩვენ ვქმნით თითოეული პროდუქტისთვის დამახასიათებელ სტილს, რომლის მიხედვითაც ხდება ნაკრების ორგანიზება",
      productionIncludeHeading:
        "პროფესიონალურად დამუშავებული ფოტო/ვიდეო ხაზს უსვამს ბიზნესის ხარისხსა და სანდოობას.",

      // WEB DEVELOPMENT
      webHeading: "UI/UX & ვებ დეველოპმენტი",
      webDesc:
        "ვებსაიტი მომხმარებელს სთავაზობს მოხერხებულ გზას გაეცნონ კომპანიისა და მისი შეთავაზებების შესახებ ფიზიკური ვიზიტებისა და სატელეფონო ზარების გარეშე. ამ ხელმისაწვდომობამ შეიძლება გამოიწვიოს მომხმარებელთა უფრო მაღალი ჩართულობა და კმაყოფილება.",
      webDescTwo:
        "პროფესიონალურად შემუშავებული ვებსაიტი ჩაუნერგავს ნდობას პოტენციურ მომხმარებლებს იმ პროდუქტებსა თუ სერვისებში, რომლებსაც თქვენი ბიზნესი სთავაზობს. ვებგვერდის საშუალებით მომხმარებელი ადვილად გაიგებს ყველა საჭირო ინფორმაციას ერთ ადგილზე, იქნება ეს პროდუქტებისა და სერვისების სია, საკონტაქტო ნომერი, მდებარეობა, თუ სამუშაო საათები.",
      webDescThree:
        "ჩვენ ვქმნით სრულყოფილ ვებსაიტს, რომელიც მორგებულია ბიზნეს მიზნებსა და ინტერესებზე, რომელიც გაამარტივებს მომხმარებლის გამოცდილებას.",
      webIncludeHeading:
        "ვებგვერდი არის მძლავრი მარკეტინგული ინსტრუმენტი ბიზნესისთვის.",
      uxResearch: "ux კვლევა",
      complexity: "საიტის სირთულის განსაზღვრა",
      functionality: "ფუნქციონალის შეფასება",
      technical: "ტექნიკური თასქების დაწერა",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
