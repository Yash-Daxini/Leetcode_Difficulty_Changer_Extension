const site = document.URL;

setInterval(() => {
    task();
}, 100);

let task = ()=>{
    if( site.includes("leetcode.com/problems/") ){

        const addCustom = css => document.head.appendChild(document.createElement("style").innerHTML = css);

        let createCustom = (tag , attr_tag , attr_name , value)=>{
            const customEle = document.createElement(tag);
            customEle.setAttribute(attr_tag,attr_name);
            customEle.innerHTML = value;
            document.body.append(customEle);
        }

        let ele = document.querySelector("#qd-content > div.h-full.flex-col.ssg__qd-splitter-primary-w > div > div > div > div.flex.h-full.w-full.overflow-y-auto > div > div > div.w-full.px-5.pt-4 > div > div.mt-3.flex.space-x-4 > div.bg-pink.dark\\:bg-dark-pink.text-pink.dark\\:text-dark-pink.inline-block.rounded-\\[21px\\].bg-opacity-\\[\\.15\\].px-2\\.5.py-1.text-xs.font-medium.capitalize.dark\\:bg-opacity-\\[\\.15\\]");

        let ele2 = document.querySelector("#qd-content > div.h-full.flex-col.ssg__qd-splitter-primary-w > div > div > div > div.flex.h-full.w-full.overflow-y-auto > div > div > div.w-full.px-5.pt-4 > div > div.mt-3.flex.space-x-4 > div.bg-yellow.dark\\:bg-dark-yellow.text-yellow.dark\\:text-dark-yellow.inline-block.rounded-\\[21px\\].bg-opacity-\\[\\.15\\].px-2\\.5.py-1.text-xs.font-medium.capitalize.dark\\:bg-opacity-\\[\\.15\\]")
        
        if( ele != null ){

            ele.innerText = "Easy";
    
            ele.classList.replace("bg-pink","bg-olive");
    
            ele.classList.replace("dark:bg-dark-pink","dark:bg-dark-olive");
    
            ele.classList.replace("text-pink","text-olive");
    
            ele.classList.replace("dark:text-dark-pink","dark:text-dark-olive");
        }
        if( ele2 != null ) {

            ele2.innerText = "Easy";
    
            ele2.classList.replace("bg-yellow","bg-olive");
    
            ele2.classList.replace("dark:bg-dark-yellow","dark:bg-dark-olive");
    
            ele2.classList.replace("text-yellow","text-olive");
    
            ele2.classList.replace("dark:text-dark-yellow","dark:text-dark-olive");
        }

    }
}
    
    
    

