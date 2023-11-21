let langs = document.querySelector(".sub-menu-1"),
    link = document.querySelectorAll(".sub-menu-1 ul li a"),
    langSelector = document.querySelector(".lang-Selector"),
    
   

    /* defin text  */

    connect = document.querySelector(".connect"),
    products =document.querySelector(".products"),
    about = document.querySelector(".about"),
    feature= document.querySelector(".feature"),
    home = document.querySelector(".home"),
    featureTitle =  document.querySelector(".featureTitle"),
    feature1 = document.querySelector(".feature1"),
    feature2 = document.querySelector(".feature2"),
    feature3 =document.querySelector(".feature3")
    advancedServices=document.querySelector(".advancedServices"),
    growth = document.querySelector(".growth"),
    performanceSign = document.querySelector(".performanceSign"),
    abouth3 = document.querySelector(".abouth3"),
    company= document.querySelector(".company"),
    about1 = document.querySelector(".about1"),
    about2 = document.querySelector(".about2"),
    about3 = document.querySelector(".about3"),
    about4 = document.querySelector(".about4"),
    product =  document.querySelector(".product"),
    description =  document.querySelector(".description"),
    contact =  document.querySelector(".contact"),
    send =  document.querySelector(".send"),
    more =document.querySelector(".more"),
    nameContact = document.getElementById('name');
    email = document.getElementById('email');
    number = document.getElementById('number');
    subject = document.getElementById('subject');
    message = document.getElementById('message');
    

    
    /* actions after click */

    link.forEach(el=>{
        el.addEventListener("click", ()=>{
             langs.querySelector(".active").classList.remove("active");
             el.classList.add("active");
   
             let attr = el.getAttribute("language")
   
             langSelector.textContent = data[attr].langSelector
             connect.textContent =data[attr].connect
             products.textContent=data[attr].products
             about.textContent = data[attr].about
             feature.textContent=data[attr].feature
             home.textContent=data[attr].home
             featureTitle.textContent = data[attr].featureTitle
             feature1.textContent = data[attr].feature1
             feature2.textContent = data[attr].feature2
             feature3.textContent = data[attr].feature3
             advancedServices.textContent=data[attr].advancedServices
             growth.textContent=data[attr].growth
             performanceSign.textContent=data[attr].performanceSign
             abouth3.textContent =data[attr].abouth3
             company.textContent =data[attr].company
             about1.textContent= data[attr].about1
             about2.textContent= data[attr].about2
             about3.textContent= data[attr].about3
             about4.textContent= data[attr].about4
             product.textContent=data[attr].product
             description.textContent = data[attr].description
             contact.textContent = data[attr].contact
             send.textContent = data[attr].send
             more.textContent = data[attr].more
             nameContact.setAttribute('placeholder',data[attr].nameContact)
             email.setAttribute('placeholder',data[attr].email)
             number.setAttribute('placeholder',data[attr].number)
             subject.setAttribute('placeholder',data[attr].subject)
             message.setAttribute('placeholder',data[attr].message)  
             
        })
   })

   

           /*    the dictionary */  
 let data = {
   
    english: {
        langSelector: "language",
        connect:"connect",
        products:"products",
        about:"about",
        feature:"feature",
        home:"home",
        featureTitle:"feature",
        feature1:"Responsiveness",
        feature2:"High credibility",
        feature3:"Renewable production",
        advancedServices:"Advanced services",
        growth:"Continuous growth",
        performanceSign:"Performance sign",
        abouth3:"Business power starts here",
        company:"Qasir Alazir for general LTD",
        about1:"Agency from Qasr Al-Wazir Company in Jordan",
        about2:"A leading Iraqi company in the field of detergents",
        about3:"It has multiple agencies in several governorates of Iraq",
        about4:"Part of Al Sharifi Group within Vision 2030",
        product:"Our products",
        description:"Our diverse range of products is designed to cater to your every desire.",
        contact : "Get in touch",
        send:"send",
        more:"more",
        nameContact:"name",
        email:"Email",
        number:"number",
        subject:"subject",
        message:"message"
    },
    عربي: {
        langSelector: "اللغة",
        connect:"تواصل معنا",
        products:"منتجاتنا",
        about:"من نحن",
        feature:"ما نتميز به",
        home:"الرئيسية",
        featureTitle:"ما نتميز به",
        feature1:"سرعة الاستجابة",
        feature2:"المصداقية العالية",
        feature3:"انتاج متجدد",
        advancedServices:"خدمات متطورة",
        growth:"نمو مستمر",
        performanceSign:"علامة الجودة",
        abouth3:"القوة التجارية تبدأ من هنا",
        company:"شركة قصر الوزير للتجارة العامة",
        about1:"وكالة من شركة قصر الوزير في الاردن",
        about2:"شركة عراقية رائدة في مجال المنظفات",
        about3:"وكالات متعددة في جميع انحاء العراق",
        about4:"جزء من مجموعة الشُريفي ضمن رؤية 2030",
        product:"منتجاتنا",
        description:".تتنوع متنجاتنا لتحقق جميع رغباتك",
        contact:"للتواصل معنا",
        send:"اراسل",
        more:"المزيد",
        nameContact:"الاسم",
        email:"الايميل",
        number:"رقم الهاتف",
        subject:"الموضوع",
        message:"الرسالة"


    }
}

