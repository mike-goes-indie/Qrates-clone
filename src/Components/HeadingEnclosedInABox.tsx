import React, { ReactElement } from 'react'

interface HeadingEnclosedInABoxProps {
  label: string
  styles?: string
}

const HeadingEnclosedInABox = ({ label, styles }: HeadingEnclosedInABoxProps): ReactElement => {
  return (
      <h3 className={`${styles} mb-[22px] w-fit  border-2 inline-block py-[9px] px-[10px] text-sm uppercase font-bold tracking-[0.18px]`}>{label}</h3>
  )
}

export default HeadingEnclosedInABox