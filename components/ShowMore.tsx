'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

import { IShowMoreProps } from '@/types'
import { updateSearchParams } from '@/utils'

import CustomButton from './CustomButton'

const ShowMore = ({ isNextPage, pageNumber }: IShowMoreProps) => {
    const router = useRouter()
    const handleNavigation = () => {
        const limit = (pageNumber + 1) * 10
        const pathname = updateSearchParams('limit', `${limit}`)
        router.push(pathname)
    }    

    return (
        <div className='w-full flex-center gap-5 mt-10'>
            {
                !isNextPage && (
                    <CustomButton title='Show More' containerStyles='bg-primary-blue rounded-full text-white' btnType='button' handleClick={ handleNavigation }/>
                )
            }
        </div>
    )
}

export default ShowMore
