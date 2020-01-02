package test;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class teste {
	 public static void main(String[] args) throws InterruptedException
	   {	
	     
		 System.setProperty("webdriver.chrome.driver","C:\\selenium-java-3.141.59\\chromedriver_win32\\chromedriver.exe");
		 WebDriver driver ;
		 driver= new ChromeDriver();
		 String baseUrl = "http://localhost:3000/";
		 driver.get(baseUrl);
	     Note.afficherNote(driver);
	     Form.remplirForm(driver);
	     driver.quit();
	        
	    }
}
