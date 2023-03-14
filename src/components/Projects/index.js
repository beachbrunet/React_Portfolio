import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import "./projects.css";
// Images
import fitness from "../../assets/fitness.png";
import dine from "../../assets/dineIn.png";
import teacherVerse from "../../assets/teacherVerse.png";

function projectsPage() {
  return (
    <CardGroup>
      {/* Card 1 with my fitness project */}
      <Card>
        <img src={fitness} alt="Fitness Screenshot" />
        <Card.Body>
          <Card.Title>Fitness Tracker Project</Card.Title>
          <Card.Text>
            The goal was to create Mongo database with a Mongoose schema and
            handle routes with Express. As a user, I want to be able to view
            create and track daily workouts. I want to be able to log multiple
            exercises in a workout on a given day. I should also be able to
            track the name, type, weight, sets, reps, and duration of exercise.
            If the exercise is a cardio exercise, I should be able to track my
            distance traveled.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Link
            href="https://github.com/beachbrunet/Dine-In-Catherine"
            target="_blank"
          >
            Repo
          </Card.Link>
          <Card.Link
            href="https://www.youtube.com/watch?v=4z_cVmWalCE"
            target="_blank"
          >
            Video Demo
          </Card.Link>
        </Card.Footer>
      </Card>

      {/* Card 2 with Dine In Project */}
      <Card>
        <img src={dine} alt="DineIn Screenshot" />
        <Card.Body>
          <Card.Title>Dine-In</Card.Title>
          <Card.Text>
            As new developers we were assigned the task as a group project to
            create a website that utilized Third Party API's. Our website Dine
            In, prompts the user to filter their preferences such as main
            protein or ethnic food category and a random recipe generator will
            come back with a tasty selection with the added bonus of a drink
            selection to go with the meal. Each meal selection card takes the
            user to a new page which lists ingredients, preparation and cooking
            instructions. Must use 2 server-side API's Must use a CSS framework,
            Bootstrap, Material UI Must use client-side storage to store
            persistent data Must have a polished UI Must meet good quality
            coding standards Must NOT use alerts, confirms, or prompts Must be
            deployed to GitHub Pages Must be interactive.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Link
            href="https://github.com/beachbrunet/Dine-In-Catherine"
            target="_blank"
          >
            Repo
          </Card.Link>
        </Card.Footer>
      </Card>

      {/* card 3 */}
      <Card>
        <img src={teacherVerse} alt="Teacher-Verse Screenshot" />
        <Card.Body>
          <Card.Title>Teacher-Verse</Card.Title>
          <Card.Text>
            An app for teachers where they can add students, guardians,
            assignments, take attendance, and keep track of behavior and
            communication records.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Link
            href="https://github.com/beachbrunet/teacher-verse"
            target="_blank"
          >
            Repo
          </Card.Link>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default projectsPage;
