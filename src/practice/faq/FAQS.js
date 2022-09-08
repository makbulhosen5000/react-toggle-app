import React, { useState } from 'react'
import { faqsData } from './data.js';
import FAQ from './FAQ.js';
function FAQS() {
    const [faqs,setFaqs] = useState(faqsData);
  return (
    <div>
         <main>
            <section>
                <h1>FAQS</h1>
                {faqs.map((faq)=>(
                    <FAQ key={faq.id} {...faq} />
                ))}
            </section>
         </main>
    </div>
  )
}

export default FAQS