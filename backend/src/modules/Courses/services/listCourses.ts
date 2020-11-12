import { getRepository } from 'typeorm'
import Course from '../entities/Course'

interface Props {
    search: string | undefined
}

class ListCourses {
    public async execute({search}: Props){
        const courseRepository = getRepository(Course)
        const courses = await courseRepository.find()

        if(search){
            const splittedSearch = search.toLowerCase().split('')
        
            const filteredCourses = courses.filter(course => {
                const splittedName = course.name.toLowerCase().split('')

                const splittedNameContainsSplittedSearch = splittedSearch.every((element, index, array) => {
                    if(index === 0){
                        return splittedName.indexOf(splittedSearch[index]) >= 0
                    }else{
                        return splittedSearch.every((element, index, array)=> {
                          return splittedName.includes(element)
                        })
                    }
                })

                if(splittedNameContainsSplittedSearch){
                    return course
                }
            })

            return filteredCourses
        }

        return courses
    }
}

export default ListCourses