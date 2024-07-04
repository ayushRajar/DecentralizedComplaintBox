const complaint=require("./complaint.js")
const date=Date();
const newComplaint=new complaint({
    id:"001",
    compalintNo:"00A",
    details:"No proper sanitization",
    timeStamp: date,
    status :"Active",
})
newComplaint.save().then((savedComplaint)=>{
    console.log("Complaint Saved: ",savedComplaint);
})
.catch((err) => {
    console.log("Error Saving User: ",err);
});



