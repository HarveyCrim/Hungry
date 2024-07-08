import zod from "zod"

const ifTrue = (data: boolean[]) => {
    let ans = data.indexOf(true)
    return ans == -1 ? false : true
}
const zodSchema = zod.object({ 
    name : zod.string().min(2),
    city: zod.string().min(3),
    country: zod.string().min(2),
    image:zod.any(),
    imageUrl:zod.string().optional(),
    deliveryPrice: zod.coerce.number(),
    deliveryTime: zod.coerce.number(),
    cuisines: zod.array(zod.boolean()).nonempty(),
    menuItems: zod.array(zod.object({
        itemName : zod.string().min(4),
        itemPrice : zod.coerce.number()
    })).nonempty()
  }).refine(data => ifTrue(data.cuisines), {message : "Pick at least one option",
    path: ["cuisines"]
  })

  export default zodSchema