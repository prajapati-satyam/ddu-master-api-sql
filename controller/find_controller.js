const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
const { z } = require("zod")

const central_schema = z.object({
  studentId: z.string().trim().startsWith('23bcu', "Student id must be start with 23bcu").length(10, "student id must be 10 character long").toUpperCase()
})

const batch_2024_25_schema = z.object({
  admissionNo: z.number().min(1, "admission number must be greater then 1").max(174, "admission number must be less then 175")
})

const tjpatel_2023_24_schema = z.object({
  spid: z.number().min(733,"last three digits must be 733 atleast").max(999, "last three digits must be less than 100")
})

const charusat_schema = z.number().max(76, "roll number must be less than 77").min(1, "roll number aleast start from 1")

const sem4 = async (req, res) => {
   const rollNumber = req.params.rollNumber;

   if (!rollNumber) {
        return res.status(400).json({
            message: "something wrong with input parameter"
        })
   }
   if (rollNumber > 147 || rollNumber <= 0) {
    return res.status(400).json({
      message: "out of range"
    })
   }
     try {
   const find = await prisma.sem4.findFirst({
    where: {
        RollNo: Number(rollNumber)
    }
   });
   if (!find) {
     return res.status(400).json({
        message: "no data found"
     })
   }
   return res.status(200).json(find)
  } catch(err) {
    console.log("error to find in sem 4 roll number : ", err);
    return res.status(500).json({
      message: 'something wrong with server, try agaian later'
    })
  }
}

const sem5 = async (req,res) => {
  const rollNumber = req.params.rollNumber;
  if (!rollNumber) {
  return res.status(400).json({
            message: "something wrong with input parameter"
        })
  }
  if (rollNumber > 144 || rollNumber <= 0) {
     return res.status(400).json({
      message: "out of range"
    })
  }

  try {
      const find = await prisma.sem5.findFirst({
        where: {
          RollNo: Number(rollNumber)
        }
      })
      if(!find) {
        return res.status(400).json({
          message: "no data found"
        })
      }
      const data = {
        id: find.id,
        RollNo: find.RollNo,
        StudentName: find.StudentName,
        EnrollmentNo: find.EnrollmentNo,
        LabBatchNo: find.LabBatchNo
      }
      return res.status(200).json(data);
  } catch (err) {
console.log("error to find in sem 5 roll number : ", err);
    return res.status(500).json({
      message: 'something wrong with server, try agaian later'
    })
  }
}

const sem5_admin = async (req,res) => {
const rollNumber = req.params.rollNumber;
  if (!rollNumber) {
  return res.status(400).json({
            message: "something wrong with input parameter"
        })
  }
  if (rollNumber > 144 || rollNumber <= 0) {
     return res.status(400).json({
      message: "out of range"
    })
  }

  try {
      const find = await prisma.sem5.findFirst({
        where: {
          RollNo: Number(rollNumber)
        }
      })
      if(!find) {
        return res.status(400).json({
          message: "no data found"
        })
      }
      return res.status(200).json(find);
  } catch (err) {
console.log("error to find in sem 5 roll number : ", err);
    return res.status(500).json({
      message: 'something wrong with server, try agaian later'
    })
  }
}

const central = async (req,res) => {
   const validate_body = central_schema.safeParse(req.body);
   if (validate_body.error) {
       return res.status(400).json({
        message: "something wrong with body",
        error: validate_body.error
       })
   }
   try {

     const find = await prisma.batch_2023_24.findFirst({
       where: {
         StudentId: validate_body.data.studentId
        }
      })
      if (!find) {
        return res.status(400).json({
          message: "no data found"
        })
      }
      return res.status(200).json(find)
    } catch (err) {
      console.log("error to find in sem 5 admin roll number : ", err);
    return res.status(500).json({
      message: 'something wrong with server, try agaian later'
    })
    }
}

const batch_2024_25 = async (req,res) => {
  const validate_body = batch_2024_25_schema.safeParse(req.body);
   if (validate_body.error) {
       return res.status(400).json({
        message: "something wrong with body",
        error: validate_body.error
       })
   }
   try {
    const find = await prisma.batch_2024_25.findFirst({
      where: {
        admission_no: Number(validate_body.data.admissionNo)
      }
    })
    if (!find) {
      return res.status(400).json({
        message: "no data found"
      })
    }
    return res.status(200).json(find)

   } catch(err) {
    console.log("error to find in batch 2024 25 admin roll number : ", err);
    return res.status(500).json({
      message: 'something wrong with server, try agaian later'
    })
   }
}

const tj_patel = async (req,res) => {
  const validate_body = tjpatel_2023_24_schema.safeParse(req.body);
  if (validate_body.error) {
     return res.status(400).json({
        message: "something wrong with body",
        error: validate_body.error
       })
  }
  const spid_string = "2023008"+validate_body.data.spid;
  try {
    const find = await prisma.tjpatel_batch_2023_24.findFirst({
      where: {
        spid: spid_string
      }
    })
    if (!find) {
 return res.status(400).json({
        message: "no data found"
      })
    }
    return res.status(200).json(find);

  } catch (err) {
    console.log("error to find in tj patel admin roll number : ", err);
    return res.status(500).json({
      message: 'something wrong with server, try agaian later'
    })
  }

}

const charusat = async (req,res) => {
  const roll_no = Number(req.params.roll_no);
  const validate_body = charusat_schema.safeParse(roll_no);
  if (validate_body.error) {
    return res.status(400).json({
      message: "something wrong with body",
      error: validate_body.error
    })
  }
  try {

  const find = await prisma.charusat.findFirst({
    where: {
      roll_no
    }
  })
  if (!find) {
 return res.status(400).json({
  message: "no data found"
 })
  }
  return res.status(200).json(find);
} catch (err) {
  console.log("error to find in charusat admin roll number : ", err);
    return res.status(500).json({
      message: 'something wrong with server, try agaian later'
    })
}
}

module.exports = { sem4 , sem5, sem5_admin, central, batch_2024_25, tj_patel, charusat}