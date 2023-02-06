import {useState} from "react";

export default function Tags(){
    const [tags, setTags] = useState(["boomdotdev", "task", "tags", "react"]);

    return (
        <div className="tags">
            {tags.map((tag, index) => (
                <div key={index} className="tag">#{tag}</div>
            ))}
        </div>
    );
}