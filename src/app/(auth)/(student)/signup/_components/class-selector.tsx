import CustomFormFieldSelect from '@/components/common/custom-ui/custom-form-field-select'
import { apiHandler } from '@/utils/apiHandler'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const ClassSelector = ({form}: {form: any}) => {

    const {data} = useQuery({
        queryKey: ['class'],
        queryFn: () => apiHandler({method:'GET',url:'/class/all'}),
        
      })
    
      console.log(data)

  return (
    <CustomFormFieldSelect
    form={form}
    name="classId"
    required={false}
    options={data?.data.map((cls: any) => ({id: cls.id, name: `${cls.name}`}))}

  />
  )
}

export default ClassSelector