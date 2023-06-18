import { Container } from "reactstrap"
import '../../../style/common-section.css'


export default function CommonSection(props){
    return(
       <section className="common__section">
        <Container>
            <h2 className="text-white">{props.title}</h2>
        </Container>

       </section>
    )
}