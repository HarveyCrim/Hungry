import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import zod from "zod"
import zodSchema, { zodSchema2 } from "../zodSchemas/restaurant"
import { toast } from "sonner"
zodSchema
type restaurant = zod.infer<typeof zodSchema> 
// type restaurant2 = zod.infer<typeof zodSchema2> 
const BASE_URL = import.meta.env.VITE_BASE_URL
export const getRes = () => {
    const query = useQuery({
        queryKey: ["restaurant"],
        queryFn: async () => {
            console.log("request fired")
            return await axios({
                method: "get",
                url: BASE_URL+"/api/res/",
                headers: {
                    Authorization: JSON.parse(localStorage.getItem("token") as string)
                }
            })
        }
    })
    const {data, isSuccess, isFetching} = query
    return {
        data, isSuccess, isFetching
    }
}

export const createRes = () => {
    const queryClient = useQueryClient()
    const fn = useMutation({
        mutationFn: async (info: restaurant) => {
            const resp = await axios({
                method: 'post',
                url: BASE_URL + "/api/res/save",
                data: info,
                headers: {
                    Authorization: JSON.parse(localStorage.getItem("token") as string)
                }
            })
            return resp
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey : ["restaurant"]})
            toast.success("Information Successfully updated!")
        }
    })
    const { data, isSuccess, isPending, mutateAsync: createTheRes } = fn

    return {
        data, isSuccess, isPending, createTheRes
    }

}