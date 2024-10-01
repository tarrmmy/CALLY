import { notification } from "antd"
import { supabaseClient } from "../supabase.config"

export const createTransaction = (
    userId, amount, type
) => {
    try {
        supabaseClient
            .from('transactions')
            .insert({
                'user_id': userId,
                amount, "description": type
            }).then((v) => {})
    } catch (error) {
        notification.error({
            "title": "Failed",
            "description": error
        })
    }
}

export const getTransactions = async (limit = 5, userId) => {
    return await supabaseClient
    .from('transactions')
    .select("*")
    .eq("user_id", userId)
    .limit(limit)
}