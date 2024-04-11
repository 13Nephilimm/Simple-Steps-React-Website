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
