'use client'
import Image from 'next/image';

const CustomButton = () => {
    return (
        <button
            disabled={false}
            type={'button'}
            className={`custom-btn`}
            onClick={() => { }}
        >

            Hello
        </button>
    )
}

export default CustomButton
