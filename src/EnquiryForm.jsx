import  { useState } from 'react'
import axios from 'axios'
const EnquiryForm = () => {
  const defaultEnquiry = {
    "name": "",
  "emailAddress": "",
  "category":"Service Request",
  "message": ""
  }
  const [enquiryForm, setEnquiryForm] = useState(defaultEnquiry)

  const handleFormChange = (e)=>{
    const {name, value} = e.target

    setEnquiryForm((prev)=>({
      ...prev,
      [name]:value
    }))
  }
  const handleFormSubmit = (e)=>{
    e.preventDefault();
    axios.post(`http://localhost:8080/log`, enquiryForm, {
     headers:{
       "Content-Type": "application/json"
     },

    }).then(()=>{
      setEnquiryForm(defaultEnquiry)
      alert("form submitted suceessfuly")
    }).catch((err)=>{
      console.error(err);
      alert("unable to submit please try again")
    })
  }


  return (
    <>
    
    <div className="bg-[#242424] flex items-center justify-center min-h-screen">
  <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Enquiry Form</h2>
    <form onSubmit={handleFormSubmit} className="space-y-4">
     
      <div>
        <label htmlFor='name' className="block text-gray-700 font-medium">Name</label>
        <input 
        value={enquiryForm.name}
        onChange={handleFormChange}
          autoComplete='off'
          type="text" 
          id="name" 
          name="name" 
          placeholder="Enter your name" 
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
          min={2}
          max={60}
          
        />
      </div>
    
      <div>
        <label htmlFor='emailAddress'  className="block text-gray-700 font-medium">Email</label>
        <input 
         value={enquiryForm.emailAddress}
         onChange={handleFormChange}
        autoComplete='off'
          type="email" 
          id="email" 
          name="emailAddress" 
          placeholder="Enter your email" 
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
     
      <div>
        <label  className="block text-gray-700 font-medium">Category</label>
        <select 
         value={enquiryForm.category}
         onChange={handleFormChange}
          id="category" 
          name="category" 
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        >
          <option value="" disabled selected>Select a category</option>
          <option value="Service Request">Service Request</option>
          <option value="feedback">Feedback</option>
          <option value="Complaint">Complaint</option>
        </select>
      </div>
      
      <div>
        <label  className="block text-gray-700 font-medium">Message</label>
        <textarea 
          id="message" 
          name="message" 
          placeholder="Enter your message" 
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="4"
          required
          minLength={3}
          maxLength={200}
          value={enquiryForm.message}
          onChange={handleFormChange}
        ></textarea>
      </div>
     
      <div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
    
    
    </>
  )
}

export default EnquiryForm