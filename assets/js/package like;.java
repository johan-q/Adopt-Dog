package like;


import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Tog extends JFrame {
    private JButton redButton, blueButton, greenButton;
    private JPanel colorPanel;
    private int redValue, blueValue, greenValue;

    public Tog() {
        setTitle("JToggleButton");
        setSize(300, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        redValue = blueValue = greenValue = 0;

        redButton = new JButton("Red");
        blueButton = new JButton("Blue");
        greenButton = new JButton("Green");

        colorPanel = new JPanel();
        colorPanel.setBackground(Color.BLACK);
        colorPanel.setPreferredSize(new Dimension(500,500));

        redButton.addActionListener(new ButtonListener());
        blueButton.addActionListener(new ButtonListener());
        greenButton.addActionListener(new ButtonListener());

        setLayout(new FlowLayout());
        add(redButton);
        add(blueButton);
        add(greenButton);
        add(colorPanel);

        setVisible(true);
    }

    private class ButtonListener implements ActionListener {
        public void actionPerformed(ActionEvent event) {
            if (event.getSource() == redButton) {
                redValue = 255 - redValue;
            } else if (event.getSource() == blueButton) {
                blueValue = 255 - blueValue;
            } else if (event.getSource() == greenButton) {
                greenValue = 255 - greenValue;
            }

            if (redValue == 0 && blueValue == 0 && greenValue == 0) {
                colorPanel.setBackground(Color.BLACK);
            } else {
                colorPanel.setBackground(new Color(redValue, greenValue, blueValue));
            }
        }
    }

    public static void main(String[] args) {
        new Tog();
    }
}