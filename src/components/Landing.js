import React from "react";
import {Button, Col, Row} from "react-bootstrap";

const Landing = () => {
    return (

            <Row className="align-items-center vh-100">
                <Col>

                    <h1>Welcome to MosesAI </h1>

                    <h2>What is MosesAI?</h2>
                    <p>MosesAI is a platform that answers your questions based on the Talmud.</p>
                    <h2>How to use MosesAI?</h2>
                    <p>Just ask a question and MosesAI will answer it.</p>

                    <div className="d-grid gap-2">
                        <Button href="/chat" size="lg"> Start Asking Questions </Button>
                    </div>
                    <hr/>
                    <small>Note: This is a beta application</small>

                </Col>
            </Row>

    )
};

export default Landing;
