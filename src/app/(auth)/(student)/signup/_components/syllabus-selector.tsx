import CustomFormFieldSelect from '@/components/common/custom-ui/custom-form-field-select'
import { apiHandler } from '@/utils/apiHandler'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const SyllabusSelector = ({form,label,required=false}: {form: any,label?: string,required?: boolean}) => {


  const {data} = useQuery({
    queryKey: ['syllabus'],
    queryFn: () => apiHandler({method:'GET',url:'/syllabus/all'}),
    
  })

  return (
    <>
    <CustomFormFieldSelect
    form={form}
    name="syllabusId"
    required={false}
    options={data?.data.map((syllabus: any) => ({id: syllabus.id, name: `${syllabus.name}  (${syllabus.code})`}))}
    label={label}
  />
  </>

  )
}

export default SyllabusSelector