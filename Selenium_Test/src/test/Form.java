package test;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Form {
	public static void remplirForm() throws InterruptedException
	{
		//comment the above 2 lines and uncomment below 2 lines to use Chrome
	 	 System.setProperty("webdriver.chrome.driver","C:\\selenium-java-3.141.59\\chromedriver_win32\\chromedriver.exe");
		 WebDriver driver ;
		 driver= new ChromeDriver();
		 String baseUrl = "http://localhost:3000/";
	     String expectedTitle = "Form";
	     String actualTitle = "";
	     WebDriverWait wait=new WebDriverWait(driver,3000);

	     // launch Fire fox and direct it to the Base URL
		 driver.get(baseUrl);
	    // get the actual value of the title
	     actualTitle = driver.getTitle();
	
			    
			         
	    System.out.println(actualTitle);
	    
	    String tagName = driver.findElement(By.id("submit")).getTagName();
	    driver.findElement(By.id("submit")).click();
        System.out.println(tagName);
        Thread.sleep(1000);
        

        driver.findElement(By.id("Formu")).click();

        //Remplire formulaire------------------------------------

        driver.findElement(By.id("matricule")).sendKeys("135/25");   
        Thread.sleep(1000);
        driver.findElement(By.id("promo")).sendKeys("1");
        Thread.sleep(1000);
        driver.findElement(By.id("gpactuel")).sendKeys("4");
        Thread.sleep(1000);
        driver.findElement(By.id("grpvoulu")).sendKeys("5");
        Thread.sleep(1000);
        driver.findElement(By.id("why")).sendKeys("memories");
        //Envoyer formilaire-------------------------------------------------------
        Thread.sleep(3000);
        driver.findElement(By.id("send")).click();
        Thread.sleep(3000);
        driver.quit();
	}
	

}
