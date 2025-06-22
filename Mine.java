package like;


import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;


public class ter {

public static void main(String[] args) {
    new terr();
}
}

class terr extends JFrame {
    private JToggleButton red, blue, green;
    private JPanel colorpanel;
    private int redval, blueval, greenval;

    public terr() {
        setTitle("JToggleButton");
        setSize(300, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);

        redval = blueval = greenval = 0;

        red = new JToggleButton("Red");
        blue = new JToggleButton("Blue");
        green = new JToggleButton("Green");

        colorpanel = new JPanel();
        colorpanel.setBackground(Color.BLACK);
        colorpanel.setPreferredSize(new Dimension(500,500));

        red.addActionListener(new ButtonListener());
        blue.addActionListener(new ButtonListener());
        green.addActionListener(new ButtonListener());

        setLayout(new FlowLayout());
        add(red);
        add(blue);
        add(green);
        add(colorpanel);

        setVisible(true);
    }

    private class ButtonListener implements ActionListener {
        public void actionPerformed(ActionEvent event) {
            if (event.getActionCommand() == "Red") {
            	if (redval == 0) {
            		redval=225;
            	} else {
            		redval = 0;
            	}
          
            } else if (event.getActionCommand() == "Blue") {
            	if (blueval == 0) {
            		blueval=225;
            	} else {
            		blueval = 0;
            	}
            } else if (event.getActionCommand() == "Green") {
            	if (greenval == 0) {
            		greenval=225;
            	} else {
            		greenval = 0;
            	}
            }

            if (redval == 0 && blueval == 0 && greenval == 0) {
                colorpanel.setBackground(Color.BLACK);
            } else {
                colorpanel.setBackground(new Color(redval, greenval, blueval));
            }
        }
    }
}