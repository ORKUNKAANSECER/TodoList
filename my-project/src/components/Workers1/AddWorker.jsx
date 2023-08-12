import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddWorker(props) {
 const [enteredWorkedName, setenteredWorkedName] = useState(""); 
 const [enteredWage, setenteredWage] = useState(""); 
 const [error,setErorr] = useState()

  const minimumWage = 11402;

 const workerNameChangeHandler = (e) => {
  setenteredWorkedName(e.target.value)
 }

 const wageChangeHandler = (e) => {
  setenteredWage(e.target.value)
 }

 const addWorkerHandler = (e) => {
  e.preventDefault();
  if(enteredWorkedName.trim().length === 0 ){
    setErorr({
      title: "İsim Alanı Zorunludur!!!",
      message: "Lütfen bir isim giriniz."
    })
    return;
  }

  if(+enteredWage < minimumWage){
    setErorr({
      title: "Maaş Alanı Zorunludur!!!",
      message: `Lütfen ${minimumWage} tl'den büyük maaş değeri giriniz.`
    })
    return;
  }

  setenteredWorkedName("");
  setenteredWage("");
  props.setWorkers((praveState)=>[
    {
      id: Math.floor((Math.random() * 1000)),
      name: enteredWorkedName,
      wage: enteredWage
    },
    ...praveState
  ])
  console.log(enteredWorkedName,enteredWage);
 }

 const errorHandler = ()=>{
    setErorr(null)
 }

  return (   
     <div>
      {error && <ErrorModal onConfirm={errorHandler} error={error} />}
      <Card className="mt-10">
     <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>

        {/* İsim Kısmı */}

        <label htmlFor="name" className="font-medium">
          Çalışan İsmi
        </label>
        <input
          id="name"
          type="text"
          placeholder="Çalışan İsmi Yazınız"
          className="max-w-[40rem] w-full mx-auto border p-2"
          onChange={workerNameChangeHandler}
          value={enteredWorkedName}
        />

        {/* Maaş Kısmı */}

        <label htmlFor="wage" className="font-medium">
          Maaş Miktarı
        </label>
        <input
          id="wage"
          type="number"
          placeholder="Maaş Giriniz"
          className="max-w-[40rem] w-full mx-auto border p-2"
          onChange={wageChangeHandler}
          value={enteredWage}
        />

        {/* Button Kısmı */}

        <Button className="mt-2" type="submit" >Ekle</Button>
      </form>
     </Card>
     </div>
  );
}

export default AddWorker;
