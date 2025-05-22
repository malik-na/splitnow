'use client'
import React, { FormEvent, useState } from 'react';

interface FormData {
    title: string;
    paidBy: string;
    amount: number;
    participants: string[];
}


const BillForm = () => {
    const [formData, setFormData] =  useState<FormData>({title: "", paidBy: "", amount: 0, participants: []});
    // TODO: Fix Zero in amount.

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, key: keyof FormData)=>{
        const value = key === 'amount' ? Number(e.target.value) : e.target.value;
        setFormData({...formData, [key]: value})
    }
    const handleSubmit = (e: FormEvent) =>{
        e.preventDefault();
        console.log(formData)
    }

    const allParticipants = ["Alice", "Jane", "Megan"];
    return (
    <form className="space-y-4 p-4 border rounded-md shadow-sm" onSubmit={(e)=>handleSubmit(e)}>
      <div>
        <label htmlFor="title" className="block font-medium mb-1">Title</label>
        <input id="title" type="text" placeholder="Expense title" className="w-full border px-3 py-2 rounded text-black" onChange={(e)=>handleInput(e, 'title')} value={formData.title}/>
      </div>

      <div>
        <label htmlFor="amount" className="block font-medium mb-1">Amount</label>
        <input id="amount" type="number" placeholder="0.00" className="w-full border px-3 py-2 rounded text-black" onChange={(e)=>handleInput(e, 'amount')} value={formData.amount}/>
      </div>

      <div>
        <label htmlFor="paidBy" className="block font-medium mb-1">Paid By</label>
        <select id="paidBy" className="w-full border px-3 py-2 rounded text-black" value={formData.paidBy} onChange={(e)=>handleInput(e, 'paidBy')}>
          <option value="">Select payer</option>
          {/* You’ll later dynamically populate participants here */}
        </select>
      </div>

      <div>
       {allParticipants.map((name)=>(
         <label className="block font-medium mb-1" key={name}>
            <input type="checkbox" value={name} checked={formData.participants.includes(name)}
            // onChange={(e)=>handleInput()}
            />
         </label>
       ))}
        
        
        <p className="text-sm">All participants split equally (default)</p>
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add Expense
      </button>
    </form>
  );
};

export default BillForm;
