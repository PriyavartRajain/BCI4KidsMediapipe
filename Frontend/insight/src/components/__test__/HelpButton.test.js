import { fireEvent, render, screen } from '@testing-library/react';
import HelpButton from '../HelpButton.js';

describe("Testing the help button", () => {
    it('should render the help icon', () => {
        render(<HelpButton />);
        const HelpButtonIcon = screen.getByAltText(/help-icon/i);
        expect(HelpButtonIcon.getAttribute("src")).toMatch(new RegExp('helplogo.svg'));
    });

    it('should render the help button background', () => {
        render(<HelpButton />);
        const HelpButtonBackground = screen.getByTestId("helpIconBgrnd")
        expect(HelpButtonBackground).toBeInTheDocument();
    });

    it('should open when clicked once, then close when clicked again', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        render(<HelpButton />);
        fireEvent.click(screen.getByTestId("helpIconBgrnd"))
        expect(consoleSpy).toHaveBeenLastCalledWith("Open")
        fireEvent.click(screen.getByTestId("helpIconBgrnd"))
        expect(consoleSpy).toHaveBeenLastCalledWith("Closed")
    });
})
