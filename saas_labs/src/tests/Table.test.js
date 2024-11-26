import { render, screen } from "@testing-library/react";
import App from "../App.js";
import { fetchProjects } from "../utils/api";
import { act } from "react-dom/test-utils";

jest.mock("../util/api");

describe("Table Component", () => {
  it("renders table headers", async () => {
    fetchProjects.mockResolvedValue({
      projects: [
        { "percentage.funded": 186, "amt.pledged": 15283 },
        { "percentage.funded": 50, "amt.pledged": 5000 },
      ],
    });

    await act(async () => {
      render(<App />);
    });

    expect(screen.getByText("S.No.")).toBeInTheDocument();
    expect(screen.getByText("Percentage Funded")).toBeInTheDocument();
    expect(screen.getByText("Amount Pledged")).toBeInTheDocument();
  });

  it("displays project data", async () => {
    fetchProjects.mockResolvedValue({
      projects: [
        { "percentage.funded": 186, "amt.pledged": 15283 },
        { "percentage.funded": 50, "amt.pledged": 5000 },
      ],
    });

    await act(async () => {
      render(<App />);
    });

    expect(screen.getByText("186")).toBeInTheDocument();
    expect(screen.getByText("15283")).toBeInTheDocument();
  });
});