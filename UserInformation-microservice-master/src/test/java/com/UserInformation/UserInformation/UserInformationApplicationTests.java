package com.UserInformation.UserInformation;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.UserInformation.UserInformation.controller.UserInformationController;
import com.UserInformation.UserInformation.model.UserInformation;
import com.UserInformation.UserInformation.repository.UserInformationRepo;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class UserInformationControllerTest {

    private com.UserInformation.UserInformation.controller.UserInformationController UserInformationController;

    @Mock
    private UserInformationRepo UserInformationRepository;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        UserInformationController = new UserInformationController(UserInformationRepository);
    }

    @Test
    void addUserInformation_ValidUserInformation_ReturnsSavedUserInformation() {
        UserInformation UserInformation = new UserInformation(); 

        when(UserInformationRepository.save(UserInformation)).thenReturn(UserInformation);

        UserInformation savedUserInformation = UserInformationController.addUserInformation(UserInformation);

        assertEquals(UserInformation, savedUserInformation);
        verify(UserInformationRepository, times(1)).save(UserInformation);
    }

    @Test
    void getAllUserInformations_NoUserInformations_ReturnsEmptyList() {
        List<UserInformation> UserInformations = new ArrayList<>(); 

        when(UserInformationRepository.findAll()).thenReturn(UserInformations);

        ResponseEntity<List<UserInformation>> response = UserInformationController.getAllUserInformation();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(UserInformations, response.getBody());
        verify(UserInformationRepository, times(1)).findAll();
    }

    @Test
    void deleteAllUserInformations_CallsDeleteAll_ReturnsSuccessMessage() {
        ResponseEntity<String> expectedResponse = ResponseEntity.ok("All UserInformations deleted successfully.");

        ResponseEntity<String> response = UserInformationController.deleteAllUserInformations();

        assertEquals(expectedResponse, response);
        verify(UserInformationRepository, times(1)).deleteAll();
    }
}
