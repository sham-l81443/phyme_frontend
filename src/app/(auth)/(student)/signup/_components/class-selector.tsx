import CustomFormFieldSelect from '@/components/common/custom-ui/custom-form-field-select'
import { apiHandler } from '@/utils/apiHandler'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const ClassSelector = ({form,name,label,required}: {form: any,name:string,label:string,required:boolean}) => {

    const {data} = useQuery({
        queryKey: ['class'],
        queryFn: () => apiHandler({method:'GET',url:'/class/all'}),
        
      })
    
      console.log(data)

  return (
    <CustomFormFieldSelect
    form={form}
    name={name}
    label={label}
    required={required}
    options={data?.data.map((cls: any) => ({id: cls.id, name: `${cls.name}`}))}

  />
  )
}

export default ClassSelector





export const SubjectSelector = ({form,name,label,required}: {form: any,name:string,label:string,required:boolean}) => {

    const {data} = useQuery({
        queryKey: ['subject'],
        queryFn: () => apiHandler({method:'GET',url:'/subject/all'}),
        
      })
    
      console.log(data)

  return (
    <CustomFormFieldSelect
    form={form}
    name={name}
    label={label}
    required={required}
    options={data?.data.map((cls: any) => ({id: cls.id, name: `${cls.name}`}))}

  />
  )
}


export const TermSelector = ({form,name,label,required}: {form: any,name:string,label:string,required:boolean}) => {

    const {data} = useQuery({
        queryKey: ['term'],
        queryFn: () => apiHandler({method:'GET',url:'/term/all'}),
        
      })
    
      console.log(data)

  return (
    <CustomFormFieldSelect
    form={form}
    name={name}
    label={label}
    required={required}
    options={data?.data.map((cls: any) => ({id: cls.id, name: `${cls.name}`}))}

  />
  )
}