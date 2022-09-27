import { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import dayjs from 'dayjs'

export const useAxios = (config) => {
    const [status, setStatus] = useState('ready')
    const [error, setError] = useState('')
    const [response, setRes] = useState({ success: false, message: '', payload: [] })
    const fetchdata = () => {
        setStatus('loading')
        axios({
            baseURL: "/api",
            timeout: 0,
            ...config
        })
            .then((res) => setRes(res.data))
            .catch((err) => setError(err))
            .finally(() => setStatus('end'))
    }
    useEffect(() => {
        fetchdata()
    }, [config])
    return { status, response, error }
}

export const useSerial = (len) => {
    let num = []
    for (let i = 0; i < len; i++) {
        let str = "A";
        num.push(String.fromCharCode(str.charCodeAt() + i) + dayjs().format('YYYYMMDDHHmmss'))
    }
    return num
}

export const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    }, [value])

    return ref.current;
}