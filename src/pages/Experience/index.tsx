import { Company } from "../../components/Company"
import { compAndCerts } from "../../data/experience"



export const Experience = () => {
    return (
        <div>
            { compAndCerts.map((item, index) => {
                return (
                    <Company
                        key={id},
                        title={title},
                        img={img},
                        description={description},
                    />
                )
            })}

        </div>
    )
}