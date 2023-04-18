

exports.getData = async (res, rows)=>{
  try {
    if(Array.isArray(rows)){
        return console.log(`validate row: ${rows}` )
    }else{
       if(rows.code){
           return console.log('warning') 
       }else{
        return console.log('success')
       }
    }
  } catch (error) {
    console.log(error)
  }
}