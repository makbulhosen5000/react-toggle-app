import React, { useState } from 'react'
import {faqsData} from './data';
function FAQ() {
    const [faq,setFaq] = useState(faqsData);
  return (
    <div>FAQ</div>
  )
}

export default FAQ