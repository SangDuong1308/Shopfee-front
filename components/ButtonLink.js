import Link from "next/link"
import { styled } from "styled-components";
import { ButtonStyle } from "./Button";

const SyledLink = styled(Link)`
    ${ButtonStyle}
`;

export default function ButtonLink(props) {
    return (
        <SyledLink {...props} / >
    );
}