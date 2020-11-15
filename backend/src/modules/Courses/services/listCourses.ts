import { getRepository } from 'typeorm'
import Course from '../entities/Course'

interface Props {
    search: string | undefined
}

class ListCourses {
    public async execute({search}: Props){
        const courseRepository = getRepository(Course)
        const courses = await courseRepository.find()

        const coursesFixed = courses.map(course => {
            return {...course, avatar: `http://192.168.1.8:3333/files/${course.avatar}.svg`}
        })

        if(search){
            const splittedSearch = search.toLowerCase().split('')
        
            const filteredCourses = coursesFixed.filter(course => {
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

        return coursesFixed
    }
}

export default ListCourses