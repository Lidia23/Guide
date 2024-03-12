import './Offer.css';

export default function Offer({projectlist}) {
    return (
        <ul>
            <li><a href={`projectlist/${projectlist}`}><i class="bi bi-arrow-right-short"></i>programs</a></li>
            <li><a href=""><i class="bi bi-arrow-right-short"></i>scholarship</a></li>
            <li><a href=""><i class="bi bi-arrow-right-short"></i>dormitories</a></li>
            <li><a href=""><i class="bi bi-arrow-right-short"></i>clubs</a></li>
        </ul>
    )
}